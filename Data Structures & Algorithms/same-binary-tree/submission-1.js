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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if ((!p && q) || (!q && p)) {
            return false;
        }

        if (!p && !q) {
            return true;
        }

        const isLeftSame = this.isSameTree(p.left, q.left);
        const isRightSame = this.isSameTree(p.right, q.right);

        return p.val === q.val && isLeftSame && isRightSame;
    }
}
