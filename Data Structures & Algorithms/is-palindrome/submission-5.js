class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const filteredString = s.toLowerCase()
        // .split("")
        // .filter((x) => x?.length && /[a-z0-9]/.test(x));

        // return filteredString.join("") === filteredString.reverse().join("");

        const filterStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let left = 0;
        let right = filterStr.length - 1;

        while (left < right) {
            if (filterStr[left] !== filterStr[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
