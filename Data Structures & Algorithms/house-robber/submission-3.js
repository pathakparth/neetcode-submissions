class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const size = nums.length;

        if (size === 1) {
            return nums[0];
        }

        let prev1 = nums[0]; // n-2
        let prev2 = Math.max(nums[0], nums[1]); // n-1

        let result = prev2;

        for (let i = 2; i < size; i++) {
            result = Math.max(prev2, prev1 + nums[i]);
            prev1 = prev2;
            prev2 = result;
        }

        return result;
    }
}
