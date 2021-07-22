const zeroMatrix = function(matrix) {
  const results = [];
  const L = matrix.length;
  let zeros = [];
  for (let i = 0; i < L; i++) {
    // Get array of indexes that have value of 0
    const rowZeros = matrix[i].reduce(function(a, e, i) {
      if (e === 0) {
        a.push(i);
      }
      return a;
    }, []);
    // Add to complete array
    zeros.push(rowZeros);
    // If any item is 0 in row set entire row to 0s
    if (rowZeros.length > 0) {
      results.push([0,0,0]);
    }
    else {
      results.push(matrix[i]);
    }
  }
  // Make zeros a simple array, not an array of arrays
  zeros = zeros.flat();
  // Not necessary to sort it (by integer) but it feels right
  zeros.sort((a, b) => a - b);
  const L2 = zeros.length;
  // Loop over 0 columns array and set same column to 0 in results
  for (let i = 0; i < L2; i++) {
    const index0 = zeros[i];
    for (let j = 0; j < L; j++) {
      results[j][index0] = 0;
    }
  }
  return results;
}

const matrix1 = [
  [ 1, 0, 3 ],
  [ 4, 5, 6 ],
  [ 0, 8, 9 ]
];
console.log(zeroMatrix(matrix1));


// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array/20798567
