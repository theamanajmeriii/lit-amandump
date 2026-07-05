/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let dq = [];      // stores indices
    let ans = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove indices that are outside the current window
        while (dq.length && dq[0] <= i - k) {
            dq.shift();
        }

        // Remove smaller elements from the back
        while (
            dq.length &&
            nums[dq[dq.length - 1]] < nums[i]
        ) {
            dq.pop();
        }

        // Add current index
        dq.push(i);

        // Window formed
        if (i >= k - 1) {
            ans.push(nums[dq[0]]);
        }
    }

    return ans;
};