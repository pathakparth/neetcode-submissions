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
     * @return {number[]}
     */
    preorderTraversal(root) {

        if (!root) {
            return [];
        }

        return [root.val, ...this.preorderTraversal(root.left), ...this.preorderTraversal(root.right)]
    }
}
