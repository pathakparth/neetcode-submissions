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
    answer = 0;

    diameterOfBinaryTree(root) {
        this.height(root);
        return this.answer;
    }

    height(root) {
        if (!root) {
            return 0;
        }

        const leftheight = this.height(root.left);
        const rightheight = this.height(root.right);

        this.answer = Math.max(this.answer, leftheight + rightheight);
        return Math.max(leftheight, rightheight) + 1;
    }
}
