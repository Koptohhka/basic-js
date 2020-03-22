const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  } 
  let sampleToInteger = parseInt(sampleActivity);
  console.log(sampleToInteger);
  if (sampleToInteger > 0 && sampleToInteger < 16) {
    let A = Math.log(MODERN_ACTIVITY / sampleToInteger);
    let B = A / 0.693 * HALF_LIFE_PERIOD;
    let result = Math.ceil(B);

    return result;
  } else {
    return false;
  }
};
