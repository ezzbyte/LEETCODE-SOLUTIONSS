/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let square = [];
    for(let i = 0; i < nums.length; i++){
        square.push(nums[i] * nums[i]);
    }
    square.sort((a,b) => b -a);
    let positiveCount = Math.ceil(square.length / 2);
    let answer = 0;
    for(let i = 0; i < square.length; i++){
        if(i < positiveCount){
            answer += square[i];
        }else{
            answer -= square[i];
        }
    }
    return answer;
};