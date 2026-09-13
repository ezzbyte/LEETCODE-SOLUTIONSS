/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        current = Math.max(nums[i], current + nums[i]);
        maxSum = Math.max(maxSum, current);
    }
    return maxSum;
};