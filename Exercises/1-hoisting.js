'use strict';

const fn = () => {
  const A = 100; //hoisting
  console.log(A);
};

module.exports = { fn };
