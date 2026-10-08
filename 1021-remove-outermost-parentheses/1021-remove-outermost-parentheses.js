/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let balance = 0;
    let answer = "";

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            if(balance > 0){
                answer += s[i];
            }
            balance++;
        }else{
            balance--;
            if(balance > 0){
                answer += s[i];
            }
        }
    }
    return answer
};