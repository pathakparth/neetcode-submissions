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
        const nodeMap = new Map();
        let prev = null;
        let curr = head;
        let index = 0;
        
        while (curr) {
            if (nodeMap.has(curr)) {
                return true;
            } else {
                nodeMap.set(curr, index);
                index++;
            }

            prev = curr;
            curr = curr.next;
        }

        return false;
    }
}
