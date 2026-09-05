class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const parts = [];
        for (const s of strs) parts.push(s.length + "#" + s);
        return parts.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // str = 5#Hello5#World
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (j < str.length && str[j] !== "#") {
                j++;
            }

            const length = parseInt(str.slice(i, j));
            res.push(str.slice(j + 1, j + 1 + length));
            i = j + 1 + length;
        }

        return res;
    }
}
