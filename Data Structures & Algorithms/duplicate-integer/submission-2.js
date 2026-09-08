class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueValues = new Set(nums);

        return uniqueValues.size !== nums.length;
    }
}
