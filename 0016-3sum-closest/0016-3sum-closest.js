/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let sum = 0;
    let closet = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
        sum = nums[i] + nums[left] + nums[right];
       if(Math.abs(sum - target) < Math.abs(closet - target)){
        closet = sum;
       } if(sum < target){
            left++;
        }
        if(sum > target){
            right--;
        }if(sum === target){
            return sum;
        }
    }}
    return closet
};