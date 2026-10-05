/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0];

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.push(0);
        }else{
            let inner = stack.pop();
            let score;
            if(inner === 0){
                score = 1;
            }else{
                score = 2 * inner;
            }
            stack[stack.length - 1] += score;
        }
    }
    return stack[0];
};