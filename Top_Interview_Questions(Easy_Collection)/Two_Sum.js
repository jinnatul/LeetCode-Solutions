// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546

const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const pos = nums.findIndex((num, idx) => num === target - nums[i] && idx !== i);
    if (pos !== -1) {
      return [i, pos];
    }
  }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))