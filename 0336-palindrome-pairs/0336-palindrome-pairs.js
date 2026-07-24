/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let result = [];
    let map = new Map();

    // Step 1: Store every reversed word with its index
    for (let i = 0; i < words.length; i++) {
        // Reverse the current word
        let reverse = words[i].length;
        let ans = "";

        for (let j = reverse - 1; j >= 0; j--) {
            ans += words[i][j];
        }

        // Store reversed word in hashmap
        map.set(ans, i);
    }

    // Step 2: Try every possible split (prefix | suffix)
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        for (let cut = 0; cut <= word.length; cut++) {

            // Split into prefix and suffix
            let prefix = word.slice(0, cut);
            let suffix = word.slice(cut);

            // ----------------------------------------------------
            // Case 1:
            // If prefix is palindrome,
            // check whether reversed suffix exists in hashmap.
            // If yes, that word should come BEFORE current word.
            // ----------------------------------------------------
            if (
                isPalindrome(prefix) &&
                map.has(suffix) &&
                map.get(suffix) !== i
            ) {
                result.push([map.get(suffix), i]);
            }

            // ----------------------------------------------------
            // Case 2:
            // If suffix is palindrome,
            // check whether reversed prefix exists in hashmap.
            // If yes, that word should come AFTER current word.
            // cut != word.length avoids duplicate pairs.
            // ----------------------------------------------------
            if (
                cut !== word.length &&
                isPalindrome(suffix) &&
                map.has(prefix) &&
                map.get(prefix) !== i
            ) {
                result.push([i, map.get(prefix)]);
            }
        }
    }

    // Helper function to check palindrome
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    return result;
};