/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let digit of String(nums[i])){
            sum += Number(digit);
        }
        if(sum === i){
            return i;
        }
    }
    return -1;
};