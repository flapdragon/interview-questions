// First stab, barely can wrap my head around it. This doesn't even find the longest subsequence. It just goes in order. Brain is tired.
// Let's call this one "Going in order wrong answer gotta start somewhere"
function increasingSub(sequence) {
  let longest = 1;
  let streak = 1;
  let previousArrayNumber = sequence[0];
  let previousSequenceNumber;
  sequence.map((x, y) => {
    // console.log("x=" + x, "longest=" + longest, "streak=" + streak, "pAN=" + previousArrayNumber, "pSN=" + previousSequenceNumber, x > previousSequenceNumber, x > sequence[y-1], "y=" + y);
    if (y > 0) {
      previousArrayNumber = sequence[y-1];
      if ((previousSequenceNumber !== undefined && x > previousSequenceNumber) || (previousSequenceNumber === undefined && x > previousArrayNumber)) {
        streak++;
        previousSequenceNumber = x;
      }
    }
  });
  return streak; // This might be wrong. Don't trust it.
}

// Tests
console.log(increasingSub([ 5, 2, 3, 1, 8, 101 ]));
console.log(increasingSub([ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 ]));

// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined // yeah seriously, i looked this up. what about it? huh?!
