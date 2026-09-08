class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dpArr = new Array(amount + 1).fill(amount + 1);
        dpArr[0] = 0;

        for (let a = 1; a <= amount; a++) {
            for (const coin of coins) {
                if (coin <= a) {
                    dpArr[a] = Math.min(dpArr[a], 1 + dpArr[a - coin]);
                }
            }
        }

        return dpArr[amount] > amount ? -1 : dpArr[amount];
    }
}
