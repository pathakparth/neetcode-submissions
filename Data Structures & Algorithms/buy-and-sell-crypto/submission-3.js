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

            const profitIfISellToday = p - min;

            if (profitIfISellToday > best) {
                best = profitIfISellToday;
            }
        }

        return best;
    }
}
