module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counter = 0;
  let level = 0;
  //let testArr = [];

  function testFunc(arr) {
    counter++;
    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[j] === 'object') {
        if (arr[j].length !== 0) {
          testFunc(arr[j]);
        }
      }
    }
    return counter;
  }
  
  function toRecurse(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
          let recursionResult = testFunc(arr[i]);
          if (recursionResult > level) {
            level = recursionResult + 1;
          }
        }
        counter = 0;
      }
  }
  toRecurse(arr);
  return level;
    }
};