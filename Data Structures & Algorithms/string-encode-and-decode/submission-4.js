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

            const wordLength = parseInt(str.slice(i, j));
            const curWordStart = j + 1;
            const nextWordStart = curWordStart + wordLength;
            res.push(str.slice(curWordStart, nextWordStart));
            i = nextWordStart;
        }

        return res;
    }
}
