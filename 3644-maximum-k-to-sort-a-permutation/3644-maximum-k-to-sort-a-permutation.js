/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    let n = nums.length;
    let k = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            k &= nums[i];
        }
    }

    return k === -1 ? 0 : k;
};