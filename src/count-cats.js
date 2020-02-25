module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((it) => {
    for (let i = 0; i < it.length; i++) {
      if (it[i] === '^^') {
        count += 1;
      }
    }
  });

  return count;
};
