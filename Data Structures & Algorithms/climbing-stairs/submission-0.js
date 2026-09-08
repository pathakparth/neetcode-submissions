class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    dpHelper(n, arr) {
        if (n === 1 || n === 2) {
            return n;
        }

        if (arr[n] !== -1) {
            return arr[n];
        }
        
        return arr[n] = this.dpHelper(n-1, arr) + this.dpHelper(n-2, arr);
    }

    climbStairs(n) {
        const arr = new Array(n+1).fill(-1);

        return this.dpHelper(n, arr);
    }
}
