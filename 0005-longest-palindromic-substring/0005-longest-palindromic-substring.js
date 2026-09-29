/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let answer = "";
    function expand(left,right){
        while(left >= 0 && right < s.length && s[right] === s[left]){
            left--;
            right++;
        }

        return s.slice(left+1,right)
    }
    for(let i = 0; i < s.length; i++){
        let odd = expand(i,i);

        let even = expand(i, i+1);

        if(odd.length > answer.length){
            answer = odd;
        }
        if(even.length > answer.length){
            answer = even;
        }
    }
    return answer;
};