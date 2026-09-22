/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sort = [...score].sort((a,b) => b - a);
    let answer = [];
    for(let i = 0; i <score.length; i++){
        let position = sort.indexOf(score[i]) + 1;
        if(position === 1){
            answer.push("Gold Medal");
        }else if(position === 2){
            answer.push("Silver Medal");
        }else if(position === 3){
            answer.push("Bronze Medal");
        }else{
            answer.push(String(position))
        }

    }
    return answer;
};