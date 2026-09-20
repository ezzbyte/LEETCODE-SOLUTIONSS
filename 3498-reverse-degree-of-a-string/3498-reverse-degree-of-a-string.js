/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for(let i = 0; i <s.length; i++){
        let normal = s.charCodeAt(i) - 96;
        let reverse = 27 - normal;

        sum += reverse * (i + 1);
    }
    return sum;
};