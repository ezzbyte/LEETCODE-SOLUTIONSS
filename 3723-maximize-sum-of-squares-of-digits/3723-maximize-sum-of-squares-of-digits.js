/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if(sum > num * 9){
        return "";
    }
    let answer = "";
    while(num > 0){
        let digit = Math.min(9, sum);

        answer += digit;
        sum -= digit;
        num--;
    }
    return sum === 0 ? answer : "";
};