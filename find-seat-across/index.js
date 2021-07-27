// My solution is to divide the given number by 12 and use the remainder to find the seat across from it.
// If the remainder is 1 - 6 then add 6, if it is 7 - 11 or 0 then subtract 6.
// Probably also need to check if it's less than 12 or not I don't know how modulus works. Also I came up with this in my head I haven't tried it yet.
// So I actually was asked this question in an interview. I started thinking about squares and using pure math because I was doing a lot of Project Euler stuff at the time.
// That threw me off and in the end I didn't even finish my solution. It was sad because this is actually pretty simple. Wasn't a great interview overall.
function findAcross(seat) {
  const remainder = seat % 12;
  if (remainder >= 1 && remainder <= 6) {
    return seat + 6;
  }
  else {
    return seat - 6;
  }
}

// Tests
console.log(findAcross(4));
console.log(findAcross(13));
console.log(findAcross(44));

// Going hog wild and using base 12.
// Seat >= 1 and <= 6 row logic also has to work with base 12 values, which are 1, 2, 3,4, 5, 6 and then above 6 are 7, 8, 9, a, b, 0, but it still works.
// Note: This solution is about 10% slower than the one above, but it is about 1000% cooler. High fiving a million Ada Lovelaces! Yeah!
function findAcrossBase12(seat) {
  // Find base 12 seat value
  const basedSeat = seat.toString(12);
  // Get the last part because with base 12 they are always the same, same as it would be with base10/decimal
  const comparator = basedSeat.slice(-1);
  // Row logic
  if (comparator >= 1 && comparator <= 6) {
    return seat + 6;
  }
  else {
    return seat - 6;
  }
}

// Tests
console.log(findAcrossBase12(4));
console.log(findAcrossBase12(13));
console.log(findAcrossBase12(44));

// Write answer to HTML. I haven't been including the questions so I thought I'd start.
const answer = document.getElementById("answer-goes-here");
answer.innerText = "f(4) = " + findAcrossBase12(4);

// Notes
// https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript/26244940 // Use int.toString(12)
