class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const numsMap = new Map();

        for (let x = 0; x < nums.length; x++) {
            const needs = target - nums[x];

            if (numsMap.has(needs)) {
                return [numsMap.get(needs), x];
            }

            numsMap.set(nums[x], x);
        }

        return [];
    }
}
