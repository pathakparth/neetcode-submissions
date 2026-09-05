class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const parenthesesMap = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let x = 0; x < s.length; x++) {
            if (parenthesesMap[s[x]]) {
                if (stack?.length && parenthesesMap[s[x]] === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[x]);
            }
        }

        return stack?.length === 0;
    }
}
