/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let answer = 0;

    for(let i = 0; i < nums.length; i++){
        let unique = new Set();

        for(let j = i; j < nums.length; j++){
            unique.add(nums[j]);

            let count = unique.size;
            answer +=  count * count;
        }
    }
    return answer;
};