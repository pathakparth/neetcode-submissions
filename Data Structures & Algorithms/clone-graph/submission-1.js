/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        if(!node) {
            return node;
        }

        const cloneMap = new Map();

        const dfs = (n) => {
            if (cloneMap.has(n)) {
                return cloneMap.get(n);
            }

            const copy = new Node(n.val, []);
            cloneMap.set(n, copy);
            
            for (let neighbor of n.neighbors) {
                copy.neighbors.push(dfs(neighbor));
            }

            return copy;
        }

        return dfs(node);
    }
}
