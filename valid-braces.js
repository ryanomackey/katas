'use strict';

function validBraces(str) {
  var stack = [];
  var openers = ['(','{','['];
  var closers = [')','}',']'];
  var brackets = {
    ')':'(',
    '}':'{',
    ']':'[',
  };
  str.split('').forEach((paren) => {
    if (openers.includes(paren)) {
      stack.push(paren);
    } else if (closers.includes(paren)) {
      if (stack[stack.length-1] === brackets[paren]) {
        stack.splice(stack.indexOf(brackets[paren]), 1);
      } else {
        stack.push('invalid');
      }
    }
  });
  if (stack.length) {
    return false;
  } else {
    return true;
  }
}

console.log(validBraces( "(){}[]" )); /* => returns true */
console.log(validBraces( "(})" )); /* => returns false */
console.log(validBraces( "[(])" )); /* => returns false */
console.log(validBraces( "([{}])" )); /* => returns true */
