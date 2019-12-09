'use strict';

const countTypesInArray = arr => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
  };
  for (const key of arr) {
    const type = typeof key;
    types[type] += 1;
  }
};
const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 'panda', {}, ];
countTypesInArray(arr);
module.exports = { countTypesInArray };
