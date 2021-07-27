// My solution is to divie the given number by 12 and use the remainder to find the seat across from it.
// If the remainder is 1 - 6 then add 6, if it is 7 - 11 or 0 then subtract 6.
// Probably also need to check if it's less than 12 or not I don't know how modulus works. Also I came up with this in my head I haven't tried it yet.
function findAcross(seat) {
  if (seat > 12) {
    const remainder = seat % 12;
    if (remainder <= 6) {
      return seat + 6;
    }
    else {
      return seat - 6;
    }
  }
  if (seat <= 6) {
    return seat + 6;
  }
  else {
    return seat - 6;
  }
}

console.log(findAcross(4));
console.log(findAcross(7));
console.log(findAcross(10));
console.log(findAcross(12));
console.log(findAcross(13));
console.log(findAcross(28));
console.log(findAcross(35));

// let answer = document.getElementById("answer-goes-here");
// console.log(answer.innerText);
