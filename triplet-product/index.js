// Rules
// Input array must be positive and/or negative integers.
// You must multiply 3 unique array members to get the answer.
// The answer must be the highest possible product of 3 numbers.

// Use cases
// 1. If all numbers are positive, then simply pick the highest 3.
// 2. If there is a mix of positive and negative numbers and there are more than 2 positive numbers and at least 2 negative
// numbers, and the absolute value of the some of the negative ones are the highest, then you can use 2 negative numbers and 1
// positive. Otherwise you can only use positive numbers.
// 3. If there is a mix but there are only 1 or 2 positive numbers, then you have to pick the highest of the positive numbers
// and the 2 highest negative numbers.
// 4. If all numbers are negative you have to pick the smallest numbers.

// hmm
function findThree(arr) {
  console.log(arr);
  return arr;
}

console.log(findThree([10, 3, 5, 6, 20]));
console.log(findThree([-10, -3, -5, -6, -20]));
console.log(findThree([1, -4, 3, -6, 7, 0]));
