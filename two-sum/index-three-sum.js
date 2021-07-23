// If array has unique members then put into set/object, then loop once and do a set search for difference
// This is basically the same as the solution for 2 sum but adding one more loop
// O(n2)
const threeSum = function(intArray, target) {
  const L = intArray.length;
  let intObject = {};
	for (let i = 0; i < L; i++) {
		let int = intArray[i];
		intObject[int] = i;
  }
  for (let i = 0; i < L; i++) {
    // Start from next after i because there is no need to look backwards. I never look back, darling, it distracts from the now.
    for (let j = i + 1; j < L; j++) {
      const diff = target - (intArray[i] + intArray[j]);
      if (intObject.hasOwnProperty(diff) && intObject[diff] !== i) {
        return [ i, j, intObject[diff] ];
      }
    }
  }
}

// Tests
console.log(threeSum([7,-5,3,1,0,2], 0));
console.log(threeSum([9,4,-1,6,11,3,2], 10));

// Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
