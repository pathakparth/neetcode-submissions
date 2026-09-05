class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filteredString = s.toLowerCase()
        .split("")
        .filter((x) => x?.length && /[a-z0-9]/.test(x));

        return filteredString.join("") === filteredString.reverse().join("");
    }
}
