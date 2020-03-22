module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw "Error";
      }
    
        const transformMethods = {
          '--discard-next': (arr, index) => {
            //if (typeof arr[index + 1] !== 'undefined') {
              console.log(1);
              arr.splice(index, 2);
              return arr;
            //}
          },
          '--discard-prev': (arr, index) => {
            if (arr[index - 1] !== 'undefined') {
              arr.splice(index - 1, 2);
              return arr;
            }
          },
          '--double-next': (arr, index) => {
            //if (typeof arr[index + 1] !== 'undefined') {
              //console.log(index++);
              arr[index] = arr[index + 1];
              return arr;
            //}
          },
          '--double-prev': (arr, index) => {
            //if (typeof arr[index + 1] !== 'undefined') {
              arr[index] = arr[index - 1];
              return arr;
            //}
          }
        }
      
        arr.forEach( (it, i) => {
          if (transformMethods[it] !== undefined) {
            transformMethods[it](arr, i);
          }
        })
      
        return arr;
};
