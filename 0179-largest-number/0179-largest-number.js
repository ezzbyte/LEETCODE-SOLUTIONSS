/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        let A = String(a);
        let B = String(b);

        return (B + A).localeCompare(A + B);
    })
    let result = nums.join("");

    if(result[0] ==="0"){
        return "0";
    }
    return result;
};