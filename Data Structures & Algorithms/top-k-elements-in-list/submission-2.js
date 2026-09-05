class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();

        for (let x of nums) {
            if (numsMap.has(x)) {
                numsMap.set(x, {
                    number: x,
                    count: numsMap.get(x).count + 1,
                });
            } else {
                numsMap.set(x, {
                    number: x,
                    count: 1,
                });
            }
        }

        return [...numsMap.values()]
            .sort((a, b) => b.count - a.count)
            .slice(0, k)
            .map((n) => n.number);
    }
}
