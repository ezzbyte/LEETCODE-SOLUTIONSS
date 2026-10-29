
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let num = board[r][c];

            // Ignore empty cells
            if (num === ".") continue;

            // Identify the 3 x 3 box
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check for duplicates
            if (
                rows[r].has(num) ||
                cols[c].has(num) ||
                boxes[boxIndex].has(num)
            ) {
                return false;
            }

            // Record the digit
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
};
