'use strict';

function spinWords(str) {
  var arr = str.split(' ');
  var newArr = [];
  arr.forEach((word) => {
    if (word.length >= 5) {
      newArr.push(word.split('').reverse().join(''));
    } else {
      newArr.push(word);
    }
  });
  return newArr.join(' ');
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//
// Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

var str = 'Hey fellow warriors';

console.log(spinWords(str));
