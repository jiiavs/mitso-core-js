
function findElement(arr, value) {
    return arr.indexOf(value);
}
function generateOdds(len) {
    return Array.from({ length: len }, (_, i) => 2 * i + 1);
}
function doubleArray(arr) {
    return arr.concat(arr);
}
function getArrayOfPositives(arr) {
    return arr.filter(x => x > 0);
}

function getArrayOfStrings(arr) {
    return arr.filter(x => typeof x === 'string');
}
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
function findAllOccurrences(arr, item) {
    return arr.filter(x => x === item).length;
}
function getUpperCaseStrings(arr) {
    return arr.map(x => x.toUpperCase());
}

function getStringsLength(arr) {
    return arr.map(x => x.length);
}

function insertItem(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
}
function getHead(arr, n) {
    return arr.slice(0, n);
}
function getTail(arr, n) {
    return arr.slice(-n);
}

function toCsvText(arr) {
    return arr.map(row => row.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
    return arr.map(x => x * x);
}

function getMovingSum(arr) {
    let sum = 0;
    return arr.map(x => sum += x);
}

function getSecondItems(arr) {
    return arr.filter((_, i) => i % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
    return arr.flatMap((x, i) => Array(i + 1).fill(x));
}

function get3TopItems(arr) {
    return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
    return arr.filter(x => typeof x === 'number' && x > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
    const map = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    return arr.sort((a,b) => map.indexOf(a) - map.indexOf(b));
}

function getItemsSum(arr) {
    return arr.reduce((a,b) => a+b, 0);
}

function getFalsyValuesCount(arr) {
    return arr.filter(x => !x).length;
}

function toStringList(arr) {
    return arr.join(',');
}

function sortCitiesArray(arr) {
    return arr.sort((a,b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
}

function getIdentityMatrix(n) {
    return Array.from({length: n}, (_, i) => Array.from({length: n}, (_, j) => i === j ? 1 : 0));
}

function getIntervalArray(start, end) {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
}

function distinct(arr) {
    return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
    return array.reduce((map, item) => {
        const key = keySelector(item);
        const value = valueSelector(item);
        map.has(key) ? map.get(key).push(value) : map.set(key, [value]);
        return map;
    }, new Map());
}

function selectMany(arr, childrenSelector) {
    return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
    return indexes.reduce((a,i) => a[i], arr);
}

function swapHeadAndTail(arr) {
    const mid = Math.floor(arr.length / 2);
    if(arr.length % 2 === 0) {
        return arr.slice(mid).concat(arr.slice(0, mid));
    } else {
        return arr.slice(mid+1).concat([arr[mid]], arr.slice(0, mid));
    }
}

module.exports = {
    findElement,
    generateOdds,
    doubleArray,
    getArrayOfPositives,
    getArrayOfStrings,
    removeFalsyValues,
    findAllOccurrences,
    getUpperCaseStrings,
    getStringsLength,
    insertItem,
    getHead,
    getTail,
    toCsvText,
    toArrayOfSquares,
    getMovingSum,
    getSecondItems,
    propagateItemsByPositionIndex,
    get3TopItems,
    getPositivesCount,
    sortDigitNamesByNumericOrder,
    getItemsSum,
    getFalsyValuesCount,
    toStringList,
    sortCitiesArray,
    getIdentityMatrix,
    getIntervalArray,
    distinct,
    group,
    selectMany,
    getElementByIndexes,
    swapHeadAndTail
};
