class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0; // buy
        let right = 1; // sell

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                left = right;
            }
            right++
        }

        return maxProfit;
    }
}
