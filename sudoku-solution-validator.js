'use strict';

function validSolution(board) {
  var testArray = [];
  board.forEach((row) => {
    testArray.push(check(row));
  });
  var column = [];
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      column[j] = board[j][i];
    }
    testArray.push(check(column));
  }
  if (testArray.includes(false)) {
    return false;
  } else {
    return true;
  }
}

function check(row) {
  var counter = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
  row.forEach((number) => {
    counter[number]++;
  });
  for (var key in counter) {
    if (counter.hasOwnProperty(key)) {
      if (counter[key] !== 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  validSolution(
    [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
  )
); //true

console.log(
  validSolution(
    [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 0, 3, 4, 8],
      [1, 0, 0, 3, 4, 2, 5, 6, 0],
      [8, 5, 9, 7, 6, 1, 0, 2, 0],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 0, 1, 5, 3, 7, 2, 1, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 0, 0, 4, 8, 1, 1, 7, 9]
    ]
  )
); //false

console.log(
  validSolution(
    [
      [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      [ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
      [ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],
      [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
      [ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
      [ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],
      [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
      [ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
      [ 9, 7, 8, 3, 1, 2, 6, 4, 5 ]
    ]
  )
);
