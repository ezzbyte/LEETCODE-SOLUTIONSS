/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0;
    let close = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            open++;
            close++;
        }else if(s[i] === ")"){
            open--;
            close--;
        }else{
            open--;
            close++;
        }
        if(close < 0){
            return false;
        }
        if(open < 0){
            open = 0;
        }
    }
    return open === 0;
};