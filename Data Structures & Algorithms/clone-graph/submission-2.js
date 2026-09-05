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
        const clones = new Map();

        const dfs = (n) => {
            if (!n) return n;
            if (clones.has(n)) return clones.get(n);

            const copy = new Node(n.val);
            clones.set(n, copy);
            copy.neighbors = n.neighbors.map((x) => dfs(x));
            return copy;
        };

        return dfs(node);
    }
}
