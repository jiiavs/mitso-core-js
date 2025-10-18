
function getComposition(f, g) {
  return function(x) {
    return f(g(x));
  };
}

function getPowerFunction(exponent) {
  return function(x) {
    return x ** exponent;
  };
}

function getPolynom(...coeffs) {
  if (!coeffs.length) return null;
  return function(x) {
    return coeffs.reduce((sum, coef, index) => sum + coef * x ** (coeffs.length - index - 1), 0);
  };
}

function memoize(func) {
  let cache;
  let called = false;
  return function() {
    if (!called) {
      cache = func();
      called = true;
    }
    return cache;
  };
}
 
function retry(func, attempts) {
  return function() {
    let lastError;
    for (let i = 0; i < attempts; i++) {
      try {
        return func();
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError;
  };
}

function logger(func, logFunc) {
  return function(...args) {
    const strArgs = args.map(a => JSON.stringify(a)).join(',');
    logFunc(`${func.name}(${strArgs}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${strArgs}) ends`);
    return result;
  };
}

function partialUsingArguments(fn, ...args1) {
  return function(...args2) {
    return fn(...args1, ...args2);
  };
}

function getIdGeneratorFunction(startFrom) {
  let current = startFrom;
  return function() {
    return current++;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
