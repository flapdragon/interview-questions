// Problem
// Given an unsorted array of integers, return the length of the longest consecutive integer sub-sequence.
// Rules
// Input numbers must be integers and can be negative, 0 or positive. You know, integers.

// Use cases / Theorems
// For the first pass I couldn't think of an O(n) solution. So, sort and then loop. O(log(n) + n).

// Solutions

const longestConsecutiveSubsequence = (arr) => {
  // Sort
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  let longest = 1;
  let current = 1;
  // Loop. Start at 1 so we can look back 1 easily.
  for (let i = 1, len = sorted.length; i < len; i++) {
    if (sorted[i] - sorted[i-1] === 1) {
      current++;
    }
    else {
      current = 1;
    }
    if (current > longest) {
      longest = current;
    }
  }
  return longest;
};

// Tests
console.log(longestConsecutiveSubsequence([ 1, 9, 3, 10, 4, 20, 2 ])); // 4
console.log(longestConsecutiveSubsequence([ 0, 3, 7, 2, 5, 8, 4, 6, 0, 1 ])); // 9
console.log(longestConsecutiveSubsequence([ -202, -1, 0, 1, 2, -2, 5, 88 ])); // 5

// What I learned

// Notes
