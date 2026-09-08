class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    dpHelperMemo(n, arr) {
        if (n === 1 || n === 2) {
            return n;
        }

        if (arr[n] !== -1) {
            return arr[n];
        }
        
        return arr[n] = this.dpHelperMemo(n-1, arr) + this.dpHelperMemo(n-2, arr);
    }

    climbStairs(n) {
        const arr = new Array(n+1).fill(-1);

        arr[1] = 1;
        arr[2] = 2;

        if (n === 1 || n === 2) {
            return n;
        }

        for (let i = 3; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }

        return arr[n];
    }
}
