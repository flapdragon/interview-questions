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
// Brute force in this case means one loop for every number of the triplet so 3 nested loops, O(n³).
// By golly n to the third power sounds bad.
function bruteForce(arr) {
  // We can't default to 0 because of the possible negative value maximums.
  // We don't want to default to undefined or null because then we would have to run a check in every loop.
  // Just hard code it?
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

console.log(bruteForce([10, 3, 5, 6, 20]));
console.log(bruteForce([-10, -3, -5, -6, -20]));
console.log(bruteForce([1, -4, 3, -6, 7, 0]));
