/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let open = 0;
    let insertion = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            open++;
        }else{
            if(open === 0){
                insertion++;
                open++;
            }

            if(s[i + 1] === ")"){
                i++
            }else{
                insertion++
            }

            open--
        }
    }
    insertion += open * 2;
    return insertion
};