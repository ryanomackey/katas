'use strict';

function anagrams(word, words) {
  var permutations = [];
  var matches = [];
  permutate(word.split(''), function(permutation) {
    permutations.push(permutation);
  });
  words.forEach((word) => {
    if (permutations.includes(word)) {
      matches.push(word);
    }
  });
  return matches;
}

function swap(array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

function permutate(array, output, n) {
  n = n || array.length;
  if (n === 1) {
    output(array.join(''));
  } else {
    for (var i = 1; i <= n; i++) {
      permutate(array, output, n-1);
      var j;
      if (n % 2) {
        j = 1;
      } else {
        j = i;
      }
      swap(array, j-1, n-1);
    }
  }
}

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
