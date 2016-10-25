'use strict';

function validBraces(str) {
  var stack = [];
  var openers = ['(','{','['];
  var brackets = {
    ')':'(',
    '}':'{',
    ']':'[',
  };
  var parenArr = str.split('');
  for (var i = 0; i < parenArr.length; i++) {
    console.log(stack);
    if (openers.includes(parenArr[i])) {
      stack.push(parenArr[i]);
    } else {
      if (stack[stack.length-1] === brackets[parenArr[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
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
