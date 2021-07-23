// Rotate 2D matrix 90 degrees to the right/clockwise
// This is my original attempt, assuming a 2x2 matrix, just trying to wrap my head around the problem.
// My approach was to take each layer, in this case the outer layer which is the only layer, and treat it like one long line, and shift items to imitate rotating.
// I think it's absolutely critical that you come up with your own solutions first, before looking for other ones online. Even if you don't get the best answer you will get something so much more valuable.
const rotate2d = function(matrix) {
  const matrixSize = matrix2d.length; // Could also use matrix2d[0].length
  matrix[matrixSize-1].reverse();
  let flattened = [].concat.apply([], matrix);
  flattened = flattened.concat(flattened.splice(0, matrixSize + 1)); // Shift left 3 to shift right once
  const rotated = [ flattened.slice(0, matrixSize), flattened.slice(matrixSize, matrixSize + matrixSize).reverse() ];
  return rotated;
}

// Tests
const matrix2d = [
  [ 1, 2 ],
  [ 3, 4 ]
];
console.log(rotate2d(matrix2d));

// Notes
// https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
