// Problem
// Given an integer array, find a maximum product of a triplet, any 3 members, in an array.
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
// If what we are doing is getting the highest product then what we are really doing is finding the three largest numbers, possibly including 2 absolute ones.
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
// Sorting is supposed to be O(nlogn) but since I am sorting 3 times maybe it's O(nlogn³).
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

// Loop only once, O(n) and find the highest numbers since that's what we're looking for.
// This is consistently faster than bruteForce O(n³) but not by a ton for small arrays like the examples, about 5%.
// However doubling the loop size then indeed it does rapidly start becoming faster, by a lot.
// For just double the size of an array with length 10 it consistently went to about 20-25% faster.
// So the upside is only 1 loop, the downside is all the additional logic which isn't nearly as maintainable as well as all the extra variables.
function shaveApe(arr) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    lowNeg1 = 0,
    lowNeg2 = 0,
    highNeg1 = -1000000,
    highNeg2 = -1000000,
    highNeg3 = -1000000;
  for (let i = 0, len = arr.length; i < len; i++) {
    // Positives
    if (arr[i] > pos3) {
      pos1 = pos2;
      pos2 = pos3;
      pos3 = arr[i];
    }
    else if (arr[i] < pos3 && arr[i] > pos2) {
      pos1 = pos2;
      pos2 = arr[i];
    }
    else if (arr[i] < pos2 && arr[i] > pos1) {
      pos1 = arr[i];
    }
    // Low neagtives
    if (arr[i] < lowNeg2) {
      lowNeg1 = lowNeg2;
      lowNeg2 = arr[i];
    }
    else if (arr[i] > lowNeg2 && arr[i] < lowNeg1) {
      lowNeg1 = arr[i];
    }
    // The highest negatives for when there are no positve numbers but no we are not checking if there are no positives.
    if (arr[i] > highNeg1 && arr[i] < 0) {
      highNeg3 = highNeg2;
      highNeg2 = highNeg1;
      highNeg1 = arr[i];
    }
    else if (arr[i] < highNeg1 && arr[i] > highNeg2) {
      highNeg3 = highNeg2;
      highNeg2 = arr[i];
    }
    else if (arr[i] < highNeg2 && arr[i] > highNeg3) {
      highNeg3 = arr[i];
    }
  }
  if (pos1 + pos2 + pos3 === 0) {
    return highNeg1 * highNeg2 * highNeg3;
  }
  else {
    return Math.max((pos1 * pos2 * pos3), (pos3 * lowNeg1 * lowNeg2));
  }
}

// Tests
console.log(bruteForce([10, 3, 5, 6, 20]));
console.log(bruteForce([-10, -3, -5, -6, -20]));
console.log(bruteForce([1, -4, 3, -6, 7, 0]));
console.log(bruteSort([10, 3, 5, 6, 20]));
console.log(bruteSort([-10, -3, -5, -6, -20]));
console.log(bruteSort([1, -4, 3, -6, 7, 0]));
console.log(shaveApe([10, 3, 5, 6, 20]));
console.log(shaveApe([-10, -3, -5, -6, -20]));
console.log(shaveApe([1, -4, 3, -6, 7, 0]));
