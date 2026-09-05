class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        if (grid?.length && grid[0]?.length){

            const dfs = (grid, i, j) => {
                if (i < 0 ||
                    i >= grid.length ||
                    j < 0 ||
                    j >= grid[i].length ||
                    grid[i][j] === "0") {
                    return;
                }

                grid[i][j] = "0";
                dfs(grid, i - 1, j); // top
                dfs(grid, i + 1, j); // bottom
                dfs(grid, i, j - 1); // left
                dfs(grid, i, j + 1); // right
            }

            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j] === "1") {
                        count++;
                        dfs(grid, i, j);
                    }
                }
            }
        }

        return count;
    }
}
