// Find the Fibonacci number at the Nth position
// I'm counting 0 and 1 as the first 2 positions of Fibonacci. Switched to 0 based index because that seems to be some sort of a standard.
// Using this iterative method with complext data types, the array was the fastest. Object was slower. Map was slow as shit.
// I thought about reducing the array size, hoping to speed up performance by keeping just the last 2 values in the array since that is all that is needed.
// However, adding onto the array (with push) was still faster than resetting the array and in the end the performance of managing the array was much more inmportant than the size of the array. Original large array: 2891298, small array: 2555458.
// Tried it with an object, only keeping 2 properties 0 and 1 but resetting the value every time. This performed significantly worse.
// Not sure why it didn't occur to me immediately but rather than using any of those fat data types I just used a couple of variables set to ints.
// This was the fastest solution I came up with. Faster than recursion and faster than any of the other memoization solutions I saw. The performance does improve as N gets higher.
// I did not see a difference between loop types. for was about the same while, etc.
// So in the end I found iteration to be the fastest. Am I completely full of shit? Probably, but I'm not spending any more time on this.
function whereFibonacciTheReckoning(n) {
  if (n < 2) {
    return n;
  }
  let fib0 = 0,
    fib1 = 1;
  for (let i = 2; i < n+1; i++) {
    const new1 = fib1 + fib0;
    fib0 = fib1;
    fib1 = new1;
  }
  return fib1;
}

// Tests
console.log(whereFibonacciTheReckoning(20));

// If you want to return the whole series up to n.
function allTheFibonacciUpToN(n) {
  let series = [ 0, 1 ];
  if (n < 2) {
    return n;
  }
  for (let i = 2; i < n+1; i++) {
    series.push(series[i-1] + series[i-2]);
  }
  return series;
}

// Tests
console.log(allTheFibonacciUpToN(20));

// Fib reference
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597 ]

// Math (when it's accurate) is always the fastest solution. I continue to discover this with every single Project Euler problem.
// Solutions that use the actual golden ratio itself, such as Math.round(Math.pow(1 + Math.sqrt(5))/2, n) / Math.sqrt(5)), are consistently and insanely the fastest for obvious reasons.
// The math based solutions really outperform all other solutions, increasinlgy so as you go higher.
// However the Math only works correctly untli the 70s positions depending on the solution because of floating point issues which I haven't taken the time to understand yet.
// On a side note, on jsben.ch it didn't beat the other solutions by as much, although it beat them consistently. On my local using performance.now() it was a constant 0 ms, O(1), whereas the other ones did take longer as n increased, O(n);

// Found some elegant one-liners that use recursion inside a ternary operator.
// The performance on these starts to degrade immediately. Even by f(10) it's not even half of the other solutions. By f(48ish) in the high 40s it completely shits the bed.

// On a side note, I miss JSPerf.
// jsben.ch and jsbench.me and measurethat.net are great but by default they just run the code.
// It might not be obvious especially if it's late and you're focused on something else but to really test the way it works you have to actually invoke the function somehow, like function fib(){...}; fib(71);, in the test.
// I mean I enjoy just testing compile time without running anything because that's my hobby!!!
