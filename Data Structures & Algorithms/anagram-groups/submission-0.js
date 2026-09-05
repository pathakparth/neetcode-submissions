class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const groups = new Map();

        for (let x = 0; x <strs.length; x++) {
            const key = strs[x].split("").sort().join("");
            groups.set(key, [...(groups.get(key) || []), strs[x]]);
        }

        return [...groups.values()];
    }
}
