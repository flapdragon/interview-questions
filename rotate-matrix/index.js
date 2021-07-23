// Assumes a square nXn matrix
// Basically looping column first then row
// Definitely came up with this after browsing solutions online
const rotate = function(matrix) {
  let results = [];
  const L = matrix.length;
  for (let col = 0; col < L; col++) {
    let newRow = [];
    for (var row = 0; row < L; row++) {
      const item = matrix[row][col];
      newRow.unshift(item);
    }
    results.push(newRow);
  }
  return results;
};

// Tests
const matrix3x3 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(rotate(matrix3x3));
const matrix4x4 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
console.log(rotate(matrix4x4));
