class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let best = 0;

        for (let p of prices) {
            if (p < min) {
                min = p;
            }

            if (p - min > best) {
                best = p - min;
            }
        }

        return best;
    }
}
