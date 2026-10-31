
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const MOD = 1000000007;

    const m = grid.length;
    const n = grid[0].length;

    // -2 means not calculated
    // -1 means invalid (outside the grid)
    const rightMemo = Array.from(
        { length: m },
        () => Array(n).fill(-2)
    );

    const downMemo = Array.from(
        { length: m },
        () => Array(n).fill(-2)
    );

    // Find the final cell reached after choosing a direction.
    // Returns -1 if the robot goes outside the grid.
    function getNext(r, c, dir) {
        const memo = dir === 0 ? rightMemo : downMemo;

        if (memo[r][c] !== -2) {
            return memo[r][c];
        }

        let nr = r;
        let nc = c;

        if (dir === 0) {
            nc++; // Move right
        } else {
            nr++; // Move down
        }

        // Outside the grid
        if (nr >= m || nc >= n) {
            memo[r][c] = -1;
            return -1;
        }

        // Empty cell: we can stop here
        if (grid[nr][nc] === 0) {
            memo[r][c] = nr * n + nc;
            return memo[r][c];
        }

        // Mirror: change direction and continue
        memo[r][c] = getNext(nr, nc, 1 - dir);

        return memo[r][c];
    }

    // DP table
    const dp = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );

    dp[0][0] = 1;

    // Process cells in topological order
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (dp[i][j] === 0) continue;

            // Reached destination
            if (i === m - 1 && j === n - 1) {
                continue;
            }

            // Try moving right
            const right = getNext(i, j, 0);

            if (right !== -1) {
                const nr = Math.floor(right / n);
                const nc = right % n;

                dp[nr][nc] =
                    (dp[nr][nc] + dp[i][j]) % MOD;
            }

            // Try moving down
            const down = getNext(i, j, 1);

            if (down !== -1) {
                const nr = Math.floor(down / n);
                const nc = down % n;

                dp[nr][nc] =
                    (dp[nr][nc] + dp[i][j]) % MOD;
            }
        }
    }

    return dp[m - 1][n - 1];
};
