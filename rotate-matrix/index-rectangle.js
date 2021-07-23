// Based on row x col approach from index.js
const rotateMxN = function(matrix) {
  let results = [];
  // Rows
  const R = matrix.length;
  // Columns
  const C = matrix[0].length;
  for (let col = 0; col < C; col++) {
    let newRow = [];
    for (let row = 0; row < R; row++) {
      const item = matrix[row][col];
      newRow.unshift(item);
    }
    results.push(newRow);
  }
  return results;
};

//Tests
// Rectangle
const matrix4x2 = [
  [1,2,3,4],
  [5,6,7,8]
];
console.log(rotateMxN(matrix4x2));
// Square
const matrix3x3 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(rotateMxN(matrix3x3));
