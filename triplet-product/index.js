// Rules
// Input array must be positive and/or negative integers.
// You must multiply 3 unique array members to get the answer.
// The answer must be the highest possible product of 3 numbers.

// Use cases
// 1. If all numbers are positive, then simply pick the highest 3.
// 2. If there is a mix of positive and negative numbers and there are more than 2 positive numbers and at least 2 negative
// numbers, choose the highest absolute values of 2 negative numbers and 1 positive, or 3 positive numbers, whichever is higher.
// 3. If there is a mix but there are only 1 or 2 positive numbers, then you have to pick the highest of the positive numbers
// and the 2 highest negative numbers.
// 4. If all numbers are negative you have to pick the smallest numbers.

// Theorems
// I'm assuming sorting is going to be slow, because it's been slow in the past. Folks we can't get fooled again.
// So I'll dust off brute force. Just kidding it's not dusty. It's not even put up yet. In fact there is no place to put it
// since it never gets put up.

// Why loop once when you can have three nested loops?
// Brute force in this case means multiplying every number times every other number in sets of 3. 1, 2, 3; 2, 3, 4; 3, 4, 5; etc.
// and one loop for every number of the triplet so 3 nested loops, O(n³).
// By golly n to the third power sounds bad.
function bruteForce(arr) {
  // We can't default to 0 because of the possible negative value maximums.
  // We don't want to default to undefined or null because then we would have to run a check in every loop.
  // Just hard code it? Yeah.
  let maximumProduct = arr[0] * arr[1] * arr[2];
  for (let i = 0, iLen = arr.length-2; i < iLen; i++) {
    for (let j = i+1, jLen = arr.length-1; j < jLen; j++) {
      for (let k = j+1, kLen = arr.length; k < kLen; k++) {
        const product = arr[i] * arr[j] * arr[k];
        if (product > maximumProduct) {
          maximumProduct = product;
        }
      }
    }
  }
  return maximumProduct;
}

// Good ol' sort. Slow and steady wins the race. What's that? The race is over already?
// I am sorting once to get the case where 3 positives are the highest (descending),
// then again if 3 negatives are the highest (ascending),
// then a final time with absolute values which should cover all cases where there are 2 negatives and 1 positive that are the highest.
// One of the three will be the highest.
// As expected this is much slower than brute force, about 45% of the speed of O(n³). Trombone goes wah wah wah.
function bruteSort(arr) {
  // Default array to product of 1st 3 integers like we agreed upon.
  let maximumProduct = arr[0] * arr[1] * arr[2];
  const descending = arr.sort((a, b) => b - a),
    descendingProduct = descending[0] * descending[1] * descending[2],
    ascending = arr.sort((a, b) => a - b),
    asscendingProduct = ascending[0] * ascending[1] * ascending[2],
    absoluteDescending = arr.sort((a, b) => Math.abs(b) - Math.abs(a)),
    absoluteDescendingProduct = absoluteDescending[0] * absoluteDescending[1] * absoluteDescending[2];
  maximumProduct = Math.max(descendingProduct, asscendingProduct, absoluteDescendingProduct);
  return maximumProduct;
}

// Tests
console.log(bruteForce([10, 3, 5, 6, 20]));
console.log(bruteForce([-10, -3, -5, -6, -20]));
console.log(bruteForce([1, -4, 3, -6, 7, 0]));
console.log(bruteSort([10, 3, 5, 6, 20]));
console.log(bruteSort([-10, -3, -5, -6, -20]));
console.log(bruteSort([1, -4, 3, -6, 7, 0]));
