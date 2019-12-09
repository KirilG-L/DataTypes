'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const key of arr) {
    const type = typeof key;
    types[type] ?
      types[type] += 1 :
      types[type] = 1;
  }
  return types;
};
const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 'panda', {}, ];
countTypesInArray(arr);
module.exports = { countTypesInArray };
