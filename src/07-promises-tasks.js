
function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (isPositiveAnswer === true) resolve('Hooray!!! She said "Yes"!');
    else if (isPositiveAnswer === false) resolve('Oh no, she said "No".');
    else reject(new Error('Wrong parameter is passed! Ask her again.'));
  });
}

function processAllPromises(array) {
  return Promise.all(array);
}

function getFastestPromise(array) {
  return Promise.race(array);
}

function chainPromises(array, action) {
  const results = [];
  return array
    .reduce(
      (p, pr) =>
        p.then(() =>
          pr
            .then(res => results.push(res))
            .catch(() => undefined)
        ),
      Promise.resolve()
    )
    .then(() => results.reduce(action));
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
