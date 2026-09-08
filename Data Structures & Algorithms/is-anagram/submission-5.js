class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        // return s.split("").sort().join() === t.split("").sort().join();

        const sMap = new Map();
        const tMap = new Map();

        for (let x = 0; x < s.length; x++) {
            sMap.set(s[x], (sMap.get(s[x]) || 0) + 1);
            tMap.set(t[x], (tMap.get(t[x]) || 0) + 1);
        }

        for (let x of sMap.keys()) {
            if (sMap.get(x) !== tMap.get(x)) {
                return false;
            }
        }

        return true;
    }
}