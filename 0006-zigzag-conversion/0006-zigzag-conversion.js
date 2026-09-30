/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || numRows >= s.length){
        return s;
    }

    let rows = new Array(numRows).fill("");
    let row = 0;
    let direction = 1;

    for(let i = 0; i <s.length; i++){
        rows[row] += s[i];

        if(row === numRows - 1){
            direction = -1;
        }

        if(row === 0){
            direction = 1;
        }
        
        row += direction;
    }
    return rows.join("");
};