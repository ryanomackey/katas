'use strict';

function isInteresting(mileage, awesomePhrases) {
  var oneAway = mileage + 1;
  var twoAway = mileage + 2;
  if (String(mileage).length < 3 && String(oneAway).length < 3 && String(twoAway).length < 3) {
    return 0;
  }
  if (
      awesomePhrases.includes(mileage) ||
      trailingZeros(mileage) ||
      identicalDigits(mileage) ||
      incrementing(mileage) ||
      decrementing(mileage) ||
      palindromeChecker(mileage)
  ) {
    return 2;
  }
  if (
      awesomePhrases.includes(oneAway) || awesomePhrases.includes(twoAway) ||
      trailingZeros(oneAway) || trailingZeros(twoAway) ||
      identicalDigits(oneAway) || identicalDigits(twoAway) ||
      incrementing(oneAway) || incrementing(twoAway) ||
      decrementing(oneAway) || decrementing(twoAway) ||
      palindromeChecker(oneAway) || palindromeChecker(twoAway)
  ) {
    return 1;
  }
  return 0;
}

function trailingZeros(number) {
  var numberArr = String(number).split('');
  for (var i = 1; i < numberArr.length; i++) {
    if (numberArr[i] !== '0') {
      return false;
    }
  }
  return true;
}

function identicalDigits(number) {
  var numberArr = String(number).split('');
  var checkValue = numberArr[0];
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] !== checkValue) {
      return false;
    }
  }
  if (numberArr.length >= 3) {
    return true;
  } else {
    return false;
  }
}

function palindromeChecker(number) {
  if (String(number) === String(number).split('').reverse().join('') && String(number).length >= 3) {
    return true;
  } else {
    return false;
  }
}

function incrementing(number) {
  var numArr = String(number).split('');
  var testArr = [];
  numArr.forEach((digit, index) => {
    var next = Number(numArr[index + 1]);
    var currPlusOne = Number(digit) + 1;
    if (currPlusOne === next || index + 1 === numArr.length) {
      testArr.push('pass');
    } else if(Number(digit) === 9 && next === 0) {
      testArr.push('pass');
    } else {
      testArr.push('fail');
    }
  });
  if (testArr.includes('fail')) {
    return false;
  } else {
    return true;
  }
}

function decrementing(number) {
  var numArr = String(number).split('');
  var testArr = [];
  numArr.forEach((digit, index) => {
    var next = Number(numArr[index + 1]);
    var currMinusOne = Number(digit) - 1;
    if (currMinusOne === next || index + 1 === numArr.length) {
      testArr.push('pass');
    } else {
      testArr.push('fail');
    }
  });
  if (testArr.includes('fail') || numArr.length < 3) {
    return false;
  } else {
    return true;
  }
}

console.log(isInteresting(109, [1337, 256]));
