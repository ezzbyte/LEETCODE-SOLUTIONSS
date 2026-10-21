/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let n = s.length;
    let sorted = true;
    for(let i = 1; i < n ; i++){
        if(s[i]<s[i - 1]){
            sorted = false;
            break;
        }
    }
    if(sorted) return 0;
    if(n === 2) return -1;

    let minChar = "z";
    let maxChar = "a";
    for(let i = 0; i < n; i++){
        if(s[i] < minChar) minChar =s[i];
        if(s[i] > maxChar) maxChar =s[i];
    }
    if(s[0] === minChar || s[n-1] === maxChar){
        return 1;
    }
    for(let i = 1; i < n-1; i++){
        if(s[i] === minChar || s[i] === maxChar){
            return 2;
        }
    }
    return 3;
};