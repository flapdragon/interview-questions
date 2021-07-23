// If array has unique members then put into set/object, then loop once and do a set search for difference
// O(n)
// Is this really O(n)? We are only talking about our own code but what about hasOwnProperty?
const twoSum = function(nums, target) {
  const L = nums.length;
  let intObject = {};
	for (let i = 0; i < L; i++) {
		let thisNum = nums[i];
		intObject[thisNum] = i;
  }
  for (let i = 0; i < L; i++) {
    const diff = target - nums[i];
    if (intObject.hasOwnProperty(diff) && intObject[diff] !== i) {
      return [i, intObject[diff]];
  	}
  }
}

// Tests
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

// Notes
// For this solution they don't mention that the integer values of the arry must be unique
// TODO: solution for non-unique array
