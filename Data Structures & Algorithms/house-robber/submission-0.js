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

        const dpArr = new Array(size);
        dpArr[0] = nums[0];
        dpArr[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i <=size; i++) {
            dpArr[i] = Math.max(dpArr[i-1], dpArr[i-2] + nums[i]);
        }

        return dpArr[size-1];
    }
}
