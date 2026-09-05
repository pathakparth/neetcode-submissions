/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        if (!root) {
            return 0;
        }

        const leftDiam = this.diameterOfBinaryTree(root.left);
        const rightDiam = this.diameterOfBinaryTree(root.right);
        const currentDiam = this.height(root.left) + this.height(root.right);

        return Math.max(leftDiam, rightDiam, currentDiam);
    }

    height(root) {
        if (!root) {
            return 0;
        }

        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }
}
