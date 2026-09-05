class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const columns = grid[0].length;
        const q = new Queue();
        let fresh = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let minutes = 0;

        while (!q.isEmpty() && fresh > 0) {
            const levelSize = q.size();

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = q.pop();

                for (let [rd, cd] of dirs) {
                    const nextRow = r + rd;
                    const nextColumn = c + cd;

                    if (
                        nextRow < 0 ||
                        nextRow >= rows ||
                        nextColumn < 0 ||
                        nextColumn >= columns ||
                        grid[nextRow][nextColumn] !== 1
                    ) {
                        continue;
                    }

                    grid[nextRow][nextColumn] = 2;
                    fresh--;
                    q.push([nextRow, nextColumn]);
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
