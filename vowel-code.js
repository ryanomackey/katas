'use strict';

function encode(string) {
  string = string.split('');
  string.forEach((letter, index) => {
    if (letter === 'a') {
      string[index] = 1;
    } else if (letter === 'e') {
      string[index] = 2;
    } else if (letter === 'i') {
      string[index] = 3;
    } else if (letter === 'o') {
      string[index] = 4;
    } else if (letter === 'u') {
      string[index] = 5;
    }
  });
  return string.join('');
}

function decode(string) {
  string = string.split('');
  string.forEach((letter, index) => {
    if (letter === '1') {
      string[index] = 'a';
    } else if (letter === '2') {
      string[index] = 'e';
    } else if (letter === '3') {
      string[index] = 'i';
    } else if (letter === '4') {
      string[index] = 'o';
    } else if (letter === '5') {
      string[index] = 'u';
    }
  });
  return string.join('');
}

console.log(decode('h2ll4')); // h2ll4

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
