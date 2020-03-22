module.exports = function getSeason(date) {
  if (typeof (date) === 'undefined') {
    return 'Unable to determine the time of year!';
  } 
  if ((date.getTime()) < 100000000 && (date.getTime()) > -100000000) {
    throw 'Error: time is undefined, input correct time';
  }

  /*
  if (test >= 9 && test < 11) {
    return 'spring'
  } else if (test >= 3 && test < 6) {
    return 'spring';
  } else if (test >= 6 && test < 9) {
    return 'summer';
  } else {
    return 'winter';
  }
  */

  const object = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter',
  }

  let test = date.getMonth();
  if (test <= 11 && 0 <= test) {
    return object[test];
  }
};
