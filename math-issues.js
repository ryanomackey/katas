'use strict';

Math.round = function(number) {
  var stringified = String(number).split('');
  var decimal = null;
  if (stringified.indexOf('.') !== -1) {
    decimal = Number(stringified.splice(stringified.indexOf('.')+1).join(''));
  }
  var integer = number;
  if (decimal) {
    integer = Number(stringified.splice(0, stringified.indexOf('.')).join(''));
  }
  if (decimal && String(decimal).split('')[0] >= 5) {
    return integer += 1;
  } else {
    return integer;
  }
};

Math.ceil = function(number) {
  var stringified = String(number).split('');
  var decimal = null;
  if (stringified.indexOf('.') !== -1) {
    decimal = Number(stringified.splice(stringified.indexOf('.')+1).join(''));
  }
  var integer = number;
  if (decimal) {
    integer = Number(stringified.splice(0, stringified.indexOf('.')).join(''));
    return integer += 1;
  } else {
    return integer;
  }
};

Math.floor = function(number) {
  var stringified = String(number).split('');
  var decimal = null;
  if (stringified.indexOf('.') !== -1) {
    decimal = Number(stringified.splice(stringified.indexOf('.')+1).join(''));
  }
  var integer = number;
  if (decimal) {
    integer = Number(stringified.splice(0, stringified.indexOf('.')).join(''));
  }
  return integer;
};

console.log(Math.ceil(0)); // 5
