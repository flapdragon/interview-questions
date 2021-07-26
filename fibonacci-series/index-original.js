// Find the Fibonacci number at the Nth position
// I'm counting 0 and 1 as the first 2 positions of Fibonacci. Not 0 based index counting. 1 based because human language.
// This is my first pass. This is the iterative method. Did an array for the data type.
function whereFibonacci(n) {
  let series = [ 0, 1 ];
  if (n === 0 || n === 1) {
    return 0;
  }
  for (let i = 2; i < n; i++) {
    series.push(series[i-1] + series[i-2]);
  }
  return series[n-1];
}

console.log(whereFibonacci(1));
console.log(whereFibonacci(5));
console.log(whereFibonacci(10));
console.log(whereFibonacci(17));

// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597 ]
