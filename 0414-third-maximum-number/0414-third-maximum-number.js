/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   nums = [...new Set(nums)];

   let first = Math.max(...nums);
   nums.splice(nums.indexOf(first), 1);
   if(nums.length === 0) return first;

   let second = Math.max(...nums);
   nums.splice(nums.indexOf(second), 1);
   if(nums.length === 0) return first;

   let third = Math.max(...nums);
   return third;
};