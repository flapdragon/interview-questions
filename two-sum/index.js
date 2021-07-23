// If array has unique members then put into set/object, then loop once and do a set search for difference
// O(n)
const twosum = function(nums, target) {
  const numlen = nums.length;
  let numObject = {};
	for (let i = 0; i < numlen; i++) {
		let thisNum = nums[i];
		numObject[thisNum] = i;
  }
  for (let i = 0; i < numlen; i++) {
    // console.log("i=" + i, "nums[i]=" + nums[i]);
    const diff = target - nums[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]];
  	}
  }
}

// Tests
console.log(twosum([2,7,11,15], 9));
console.log(twosum([3,2,4], 6));
console.log(twosum([3,3], 6));

// Notes
// For this solution they don't mention that the integer values of the arry must be unique
// TODO: solution for non-unique array
