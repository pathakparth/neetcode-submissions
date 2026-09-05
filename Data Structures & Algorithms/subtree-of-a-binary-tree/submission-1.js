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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        if (!root || !subRoot) {
            return root === subRoot;
        }

        if (root.val === subRoot.val && this.isIdentical(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isIdentical(p, q) {
        if (!p || !q) {
            return p === q;
        }
        return p.val === q.val && this.isIdentical(p.left, q.left) && this.isIdentical(p.right, q.right);
    }
}
