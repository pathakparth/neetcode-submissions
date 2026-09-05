class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const midIndex = Math.floor((left + right)/2);
            const midValue = nums[midIndex];

            if (midValue === target) {
                return midIndex;
            }
            
            if (midValue < target) {
                left = midIndex + 1;
            }

            if (midValue > target) {
                right = midIndex - 1;
            }
        }

        return -1;
    }
}
