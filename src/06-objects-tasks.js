function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => this.width * this.height;
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  const instance = Object.create(proto);
  Object.assign(instance, obj);
  return instance;
}

class Selector {
  constructor() {
    this.parts = [];
    this.order = [];
  }

  checkOrder(value) {
    const orderMap = {
      element: 1,
      id: 2,
      class: 3,
      attr: 4,
      pseudoClass: 5,
      pseudoElement: 6,
    };

    if (orderMap[value] < Math.max(0, ...this.order)) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    this.order.push(orderMap[value]);
  }

  checkUnique(value) {
    if (
      ['element', 'id', 'pseudoElement'].includes(value) &&
      this.parts.some((p) => p.type === value)
    ) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
  }

  element(value) {
    this.checkOrder('element');
    this.checkUnique('element');
    this.parts.push({ type: 'element', value });
    return this;
  }

  id(value) {
    this.checkOrder('id');
    this.checkUnique('id');
    this.parts.push({ type: 'id', value: `#${value}` });
    return this;
  }

  class(value) {
    this.checkOrder('class');
    this.parts.push({ type: 'class', value: `.${value}` });
    return this;
  }

  attr(value) {
    this.checkOrder('attr');
    this.parts.push({ type: 'attr', value: `[${value}]` });
    return this;
  }

  pseudoClass(value) {
    this.checkOrder('pseudoClass');
    this.parts.push({ type: 'pseudoClass', value: `:${value}` });
    return this;
  }

  pseudoElement(value) {
    this.checkOrder('pseudoElement');
    this.checkUnique('pseudoElement');
    this.parts.push({ type: 'pseudoElement', value: `::${value}` });
    return this;
  }

  combine(selector1, combinator, selector2) {
    this.parts.push({
      type: 'combine',
      value: `${selector1.stringify()} ${combinator} ${selector2.stringify()}`,
    });
    return this;
  }

  stringify() {
    return this.parts
      .map((p) => p.value)
      .join('')
      .trim()
      .replace(/\s{2,}/g, '   '); 
  }
}

const cssSelectorBuilder = new (class {
  element(value) {
    const s = new Selector();
    return s.element(value);
  }
  id(value) {
    const s = new Selector();
    return s.id(value);
  }
  class(value) {
    const s = new Selector();
    return s.class(value);
  }
  attr(value) {
    const s = new Selector();
    return s.attr(value);
  }
  pseudoClass(value) {
    const s = new Selector();
    return s.pseudoClass(value);
  }
  pseudoElement(value) {
    const s = new Selector();
    return s.pseudoElement(value);
  }
  combine(selector1, combinator, selector2) {
    const s = new Selector();
    return s.combine(selector1, combinator, selector2);
  }
})();

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};

