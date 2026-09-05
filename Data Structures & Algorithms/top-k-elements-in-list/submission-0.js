class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();

        for (let x of nums) {
            const val = numsMap.get(x);
            numsMap.set(
                x,
                val?.count
                    ? {
                          ...val,
                          count: val.count + 1,
                      }
                    : {
                          number: x,
                          count: 1,
                      },
            );
        }

        return [...numsMap.values()]
            .sort((a, b) => b.count - a.count)
            .slice(0, k)
            .map((n) => n.number);
    }
}
