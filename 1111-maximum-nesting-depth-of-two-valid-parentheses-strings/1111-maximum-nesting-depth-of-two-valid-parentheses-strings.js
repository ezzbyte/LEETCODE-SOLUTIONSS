/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let answer = [];
    let depth = 0;
    for(let i = 0; i < seq.length; i++){
        if(seq[i] === "("){
            answer[i] = depth % 2;
            depth++
        }else{
            depth--;
            answer[i] = depth % 2;
        }
    }
    return answer
};