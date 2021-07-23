// This solution solves the matrix in place, without creating a new matrix variable.
// However, soiutions that are no space or in place still create space, they just don't create an entirely new matrix variable.
// For a 2x2 matrix this would actually be more work, because more flags or trackers would take up at least as much size as the additional matrix itself.
// It's only useful for academic purposes or for when you actually do have a huge matrix, in which case the space saving increses O(mXn), though I haven't done the performance testing.

const zeroMatrix = function(matrix) {
  let zeroRows = [];
  let zeroCols = [];
  const N = matrix.length;
  for (let i = 0; i < N; i++) {
    const row = matrix[i].reduce(function(a, e, i) {
      if (e === 0) {
        a.push(i);
      }
      return a;
    }, []);
    if (row.length > 0) {
      zeroRows.push([i]);
    }
    zeroCols.push(row);
  }
  zeroRows = zeroRows.flat();
  zeroRows.sort((a, b) => a - b);
  zeroCols = zeroCols.flat();
  zeroCols.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    if (zeroRows.find(el => el === i) === i) {
      matrix[i] = [ 0, 0, 0 ];
    }
    else {
      for (let j in zeroCols) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

const matrix1 = [
  [ 1, 0, 3 ],
  [ 4, 5, 6 ],
  [ 0, 8, 9 ]
];
console.log(zeroMatrix(matrix1));


// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array/20798567
