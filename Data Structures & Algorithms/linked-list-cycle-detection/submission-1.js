/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const nodeMap = new Set();
        let prev = null;
        let curr = head;
        
        while (curr) {
            if (nodeMap.has(curr)) {
                return true;
            } else {
                nodeMap.add(curr);
            }

            prev = curr;
            curr = curr.next;
        }

        return false;
    }
}
