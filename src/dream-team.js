module.exports = function createDreamTeam(members) {
  let arr = [];
  let res = '';

  let testArr = [];

  if (Array.isArray(members)) {
    
  } else {
    return false;
  }

  for (let j = 0; j < members.length; j++) {
    if (typeof members[j] === 'string') {
      arr.push(members[j]);
    }
  }

  arr.forEach((it) => {
    for (let i = 0; i < it.length; i++) {
      if (it[i] !== ' ') {
        testArr.push(it[i].toUpperCase());
        break;
      }
    }

  })  

  for (let i = 0; i < testArr.length; i++) {
      
    for (let j = 0; j < testArr.length; j++) {
      if (testArr[i] < testArr[j]) {
        let swap = testArr[i];
        testArr[i] = testArr[j];
        testArr[j] = swap;
      }
    }

  }

  for (let i = 0; i < testArr.length; i++) {
    res += testArr[i];
  }

  return res;
};
