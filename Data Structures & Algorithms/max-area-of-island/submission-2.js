class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxCount = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            const dir = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            grid[r][c] = 0;
            let area = 1;

            for (let [dr, dc] of dir) {
                const nextRow = r + dr;
                const nextCol = c + dc;

                if (
                    nextRow < 0 ||
                    nextRow >= rows ||
                    nextCol < 0 ||
                    nextCol >= cols ||
                    grid[nextRow][nextCol] === 0
                ) {
                    continue;
                }

                area += dfs(nextRow, nextCol);
            }

            return area;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    maxCount = Math.max(maxCount, dfs(r, c));
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    return 0;
                }
            }
        }

        return maxCount;
    }
}
