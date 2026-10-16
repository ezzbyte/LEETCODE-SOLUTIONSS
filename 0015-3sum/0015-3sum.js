/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     let triplet = [];
     let seen =  new Set();
     nums.sort((a,b) => a - b);
     for(let i = 0; i < nums.length; i++){
         let j = i + 1;
         let k = nums.length - 1;
        while( j < k){
            let sum = nums[i] + nums[j] + nums[k];

            if(sum === 0){
                let current = [nums[i], nums[j], nums[k]];
                let key = current.join(",");

                if(!seen.has(key)){
                    seen.add(key);
                    triplet.push(current);

                }
                j++;
                k--;
            }else if(sum < 0){
                j++;
            }else{
                k--;
            }
        }
     }
     return triplet
};