'use strict';

function playPass(str, n) {
  var stepOne = charShift(str, n);
  var stepTwo = complementToNine(stepOne);
  var stepThree = evenOddCaseShift(stepTwo);
  return stepThree;
}

function charShift(str, n) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  str = str.toLowerCase().split('');
  for (var i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      var index = alphabet.indexOf(str[i]) + n;
      if (index >= alphabet.length) {
        index -= alphabet.length;
      }
      str[i] = alphabet[index];
    }
  }
  return str.join('');
}

function complementToNine(str) {
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      str[i] = 9 - str[i];
    }
  }
  return str.join('');
}

function evenOddCaseShift(str) {
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0 && /[a-z]/.test(str[i])) {
      str[i] = str[i].toUpperCase();
    }
  }
  return str.reverse().join('');
}

var str1 = 'MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015';
var str2 = "I LOVE YOU!!!";
var str3 = "TO BE HONEST WITH YOU I DON'T USE THIS TEXT TOOL TOO OFTEN BUT HEY... MAYBE YOUR NEEDS ARE DIFFERENT.";

//'.ySjWjKkNi jWf xIjJs wZtD JgDfR ...dJm yZg sJyKt tTy qTtY YcJy xNmY JxZ Y\'StI N ZtD MyNb yXjStM Jg tY'

console.log(playPass(str1, 2));
console.log(playPass(str2, 1));
console.log(playPass(str3, 5));
