// Problem
// Given an unsorted array of integers, return the length of the longest consecutive integer sub-sequence.
// Rules
// Input numbers must be integers and can be negative, 0 or positive. You know, integers.

// Use cases / Theorems
// For the first pass I couldn't think of an O(n) solution. So, sort, then loop. O(log(n) + n).
// I knew the answer would be to either loop once or convert the array to a set or object or something else.
// Sometimes it's nice to start with a brute force solution. Honestly that's probably a good format for these problems.


// Solution 1: Brute Force. O(n³)
// This is the true brute force solution. Just loop it. And then loop inside that. This one did not occur to me at first.
// This is basically the supposedly best O(n) solution using the original array rather than a set.
// We'll have to use indexOf, so this is going to be *quite* slow.
// Actually yes it's so slow that it will crash. Don't run this code. Try not to even compile it.
// You could rewrite this to use Array.prototype.find() but it would be clunky and again, this is brute force so why bother?
// People actually would do this in JavaScript? I doubt it.
// lcs = longestConsecutiveSubsequence
// 🧟 No award for this browser locking abomination.
const lcsBruteForce = (arr) => {
  let longestStreak = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    let currentItem = arr[i],
      currentStreak = 0,
      currentInteger;
    if (arr.indexOf(currentItem - 1) === -1) {
      currentInteger = currentItem;
      currentStreak = 1;
      while (arr.indexOf(currentInteger + 1) === -1) {
        currentInteger++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};
// Tests 1: Brute Force
// Tests for this one are commented out because it will lock the browser tab. I'm glad this one didn't occur to me. Nested loops and indexOf? Not even once.
// console.log(lcsBruteForce([ 1, 9, 3, 10, 4, 20, 2 ])); // 4
// console.log(lcsBruteForce([ 0, 3, 7, 2, 5, 8, 4, 6, 0, 1 ])); // 9
// console.log(lcsBruteForce([ -202, -1, 0, 1, 2, -2, 5, 88 ])); // 5


// Solution 2: Smort Sort. O(log(n) + n)
// Sort then loop and check for consecutives and compare them. I originally thought of this as the brute force solution.
// It turns out this is the fastest in JavaScript and this was my first thought. I finally came up with the best solution on my first try. I'm a genius. 🧠
// 🥇 First place for the brain child.
const lcsSort = (arr) => {
  // Sort, JavaScript integer sort DIY
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  let longestStreak = 1;
  let currentStreak = 1;
  // Loop. Start at 1 so we can look back 1 easily.
  for (let i = 1, len = sorted.length; i < len; i++) {
    if (sorted[i] - sorted[i-1] === 1) {
      currentStreak++;
    }
    else {
      currentStreak = 1;
    }
    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }
  }
  return longestStreak;
};

// Tests 2: Smort Sort
// console.log(""); // Break between tests
// console.log(lcsSort([ 1, 9, 3, 10, 4, 20, 2 ])); // 4
// console.log(lcsSort([ 0, 3, 7, 2, 5, 8, 4, 6, 0, 1 ])); // 9
// console.log(lcsSort([ -202, -1, 0, 1, 2, -2, 5, 88 ])); // 5


// Solution 3: Convert to Set. O(n)
// Yeah this is JavaScript not Python or Java so this is actually slower than sorting.
// I did see minutely and not consistently faster implementations of this on geeksforgeeks.org, but it was the same type of solution.
// Also this is supposed to be O(n) but I say balderdash, it's O(n + n) because you loop over the array once to create the say and loop again for the consecutives.
// This solution might perform better as the original array gets larger. I'm too lazy to test.
// 🥈 Second place.
const lcsSet = (arr) => {
  const intSet = new Set(arr);
  let longestStreak = 0;
  for (let item of intSet.entries()) {
    let currentStreak = 0,
      currentInteger;
    if (!intSet.has(item[0] - 1)) {
      currentInteger = item[0];
      currentStreak = 1;
      while (intSet.has(currentInteger + 1)) {
        currentInteger++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};

// Tests 3
// console.log(""); // Break between tests
// console.log(lcsSet([ 1, 9, 3, 10, 4, 20, 2 ])); // 4
// console.log(lcsSet([ 0, 3, 7, 2, 5, 8, 4, 6, 0, 1 ])); // 9
// console.log(lcsSet([ -202, -1, 0, 1, 2, -2, 5, 88 ])); // 5


// What I learned
// I learned how much faster operations on JavaScript sets are than operations on arrays, such as Array.prototype.indexOf().
// I already knew that I guess but today I learned the extent of how much faster they are.
// So naturally, doing this in JavaScript it never occured to me to try such a thing.


// Notes
// https://leetcode.com/problems/longest-consecutive-sequence/
// https://www.geeksforgeeks.org/longest-consecutive-subsequence/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://www.google.com/search?q=superscript+2+alt+code&oq=superscript+2
