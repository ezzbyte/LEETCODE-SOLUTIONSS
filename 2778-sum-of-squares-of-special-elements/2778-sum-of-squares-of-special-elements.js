/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let answer = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums.length % (i + 1) === 0){
            answer += nums[i] * nums[i];
        }
    }
    return answer;
};