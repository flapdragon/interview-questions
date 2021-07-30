// There are 3 basic states (as of now) for this recursion
// 1. First call, just a straight array, haven't started looking for anything yet. This only happens once, on the first call.
// 2. The function has begun looping through the main sequence, has identified a comparator or starting point for the subsequence,
// and has identified a subsequence of indeces of members of the original array from that point to the right that are less than the comparator.
function longestSubsequence(sequence, subsequence, comparator, comparatorIndex, lessIndeces, lessIndex) {
  console.log("0. function called", sequence, subsequence, comparator, comparatorIndex, subsequence, lessIndeces, lessIndex);
  // If first time calling function, comparator has not been set yet
  if (comparator === undefined)  {
    console.log("1. comparator === undefined", sequence, comparator, comparatorIndex, lessIndeces, lessIndex);
    // Get first array member we are testing wtih - comparator
    const item = sequence[0];
    // Recurse with new subsequence and comparator
    longestSubsequence(sequence, [ item ], item, 0);
  }

  if (comparatorIndex === sequence.length - 1) {
    return subsequence.length;
  }

  // If sub array of all array items that are smaller (lessIndeces) is not defined
  if (comparator !== undefined && lessIndeces === undefined) {
    console.log("2. lessIndeces === undefined", sequence, subsequence, comparator, comparatorIndex, subsequence, lessIndeces, lessIndex);
    // // Get slice of sequence after the position of the item we are comparing
    // const arrayFromComparator = sequence.slice(comparatorIndex, sequence.length);
    let tempIndeces = [];
    // Use the original sequence array as source so we don't have to pass around a bunch of smaller arrays and have like a thousand arguments
    // To make sure you only get itesm less than the comparator start from the comparator index + 1
    for (let i = comparatorIndex + 1, len = sequence.length; i < len; i++) {
      if (sequence[i] > subsequence[subsequence.length-1]) {
        // Push index to array
        tempIndeces.push(i);
      }
    }
    longestSubsequence(sequence, subsequence, comparator, comparatorIndex, tempIndeces, 0);
  }

  if (lessIndeces !== undefined && lessIndex !== undefined && lessIndex < lessIndeces.length) {
    console.log("3. lessIndeces !== undefined && lessIndex !== undefined", sequence, comparator, comparatorIndex, subsequence, lessIndeces, lessIndex);
    for (const i of lessIndeces) {
      const item = sequence[i];
      if (item > subsequence[subsequence.length-1]) {
        longestSubsequence(sequence, [ ...subsequence, item ], comparator, comparatorIndex, lessIndeces, ++lessIndex);
      }
      else {
        longestSubsequence(sequence, subsequence, comparator, comparatorIndex, lessIndeces, ++lessIndex);
      }
    }
  }
  // If we are at the end of the lessIndeces array
  else {
    // To avoid confusion I'm just commenting that I'm using the prefix increment, which will increment the value before it is returned.
    // In all places that it is used in the same line, so in sequence[comparatorIndex].
    longestSubsequence(sequence, subsequence, sequence[comparatorIndex], ++comparatorIndex);
  }
}

// Tests
console.log(longestSubsequence([ 5, 2, 3, 1, 8, 101 ]));
// console.log(longestSubsequence([ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 ]));

// Notes
// What? Uncaught RangeError: Maximum call stack size exceeded? Never heard of that error before.
//
//
// Old Code
// // // Recursive method. Start at s[1] and look backwards/left to find the most sequential numbers that are less than (or equal to) s[x].
// // I know it's not the most efficient method but it's still an interesting problem to solve.
// // My solution: Pick array members and look backwards to find longest subsequence to that point.
// // Start from the end - in theory the longer ones should end there (again in theory).
// // As you work your way left make sure the index is greater than the current longest length or you're done!
// // This recursive solution is slow O(2^n) whatevers
// // I'm starting to wonder if I am going to use recursion ... I'm just iterating
// function subsequenceRecursion(sequence) {
//   let streak = 1;
//   const len = sequence.length;
//   // Current (currently last) array member
//   const lastNumber = sequence[len-1];
//   // If loop reaches point where the index is shorter than the longest current streak then stop looking
//   if (len < streak) {
//     return streak;
//   }
//   // Get slice of array from this point to the beginning
//   const sub = sequence.slice(0, len);
//   // Find the indeces for all values before this one that are less than this one
//   let lessFilter = [];
//   for (let i = 0; i < len; i++) {
//     if (sub[i] < lastNumber) {
//       lessFilter.push(i);
//     }
//   }
//   lessFilter = lessFilter.reverse();
//   for (let i = 0; i < len; i++) {
//     if (lessFilter[i] < lastNumber) {
//       lessFilter.push(i);
//     }
//   }
//   console.log(len, lastNumber, sub, lessFilter);
//   // return sequence;
// }
//
// // Tests
// console.log(subsequenceRecursion([ 5, 2, 3, 1, 8, 101 ]));
// // console.log(subsequenceRecursion([ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 ]));
//
// // First stab, barely can wrap my head around it. This doesn't even find the longest subsequence. It just goes in order. Brain is tired.
// // Let's call this one "Going in order wrong answer gotta start somewhere"
// function increasingSub(sequence) {
//   let longest = 1;
//   let streak = 1;
//   let previousArrayNumber = sequence[0];
//   let previousSequenceNumber;
//   sequence.map((x, y) => {
//     // console.log("x=" + x, "longest=" + longest, "streak=" + streak, "pAN=" + previousArrayNumber, "pSN=" + previousSequenceNumber, x > previousSequenceNumber, x > sequence[y-1], "y=" + y);
//     if (y > 0) {
//       previousArrayNumber = sequence[y-1];
//       if ((previousSequenceNumber !== undefined && x > previousSequenceNumber) || (previousSequenceNumber === undefined && x > previousArrayNumber)) {
//         streak++;
//         previousSequenceNumber = x;
//       }
//     }
//   });
//   return streak; // This might be wrong. Don't trust it.
// }
//
// // Tests
// // console.log(increasingSub([ 5, 2, 3, 1, 8, 101 ]));
// // console.log(increasingSub([ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 ]));
//
// // Notes
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
