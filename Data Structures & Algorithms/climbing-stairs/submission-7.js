class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    dpHelperMemo(n, arr) { // Memoization
        if (n === 1 || n === 2) {
            return n;
        }

        if (arr[n] !== -1) {
            return arr[n];
        }
        
        return arr[n] = this.dpHelperMemo(n-1, arr) + this.dpHelperMemo(n-2, arr);
    }

    climbStairs(n) { // Tabulation
        // const arr = new Array(n+1).fill(-1);

        // arr[1] = 1;
        // arr[2] = 2;

        // if (n === 1 || n === 2) {
        //     return n;
        // }

        // for (let i = 3; i <= n; i++) {
        //     arr[i] = arr[i - 1] + arr[i - 2];
        // }

        // return arr[n];

        if (n === 1 || n === 2) {
            return n;
        }

        let prev2 = 1; // n-2
        let prev1 = 2; // n-1

        let result = prev1;

        for (let i = 3; i <= n; i++) {
            result = prev1 + prev2;
            prev2 = prev1;
            prev1 = result;
        }

        return result;

        // return dpHelperMemo(n arr);

    }
}
