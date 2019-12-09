'use strict';

const fn = () => {
  console.log(A);
  var A = 100; //hoisting
};

module.exports = { fn };
