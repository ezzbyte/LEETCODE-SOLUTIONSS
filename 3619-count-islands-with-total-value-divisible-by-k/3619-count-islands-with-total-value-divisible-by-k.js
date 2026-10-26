/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

var countIslands = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    function dfs(r, c) {
        // Out of bounds or water/already visited
        if (
            r < 0 || r >= m ||
            c < 0 || c >= n ||
            grid[r][c] === 0
        ) {
            return 0;
        }

        // Save this cell's value
        let sum = grid[r][c];

        // Mark it as visited
        grid[r][c] = 0;

        // Explore all four directions
        sum += dfs(r - 1, c); // up
        sum += dfs(r + 1, c); // down
        sum += dfs(r, c - 1); // left
        sum += dfs(r, c + 1); // right

        return sum;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] > 0) {
                let total = dfs(r, c);

                if (total % k === 0) {
                    count++;
                }
            }
        }
    }

    return count;
};
