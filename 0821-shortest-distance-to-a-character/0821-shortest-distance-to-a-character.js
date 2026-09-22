/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let answer = [];
    for(let i = 0; i <s.length; i++){
        let min = Infinity;
        for(let j = 0; j < s.length; j++){
            if(s[j] === c){
                let distance = Math.abs(i - j);
                min = Math.min(min, distance);
            }
        }
        answer.push(min);
    }
    return answer;
};