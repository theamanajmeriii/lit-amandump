/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    // Convert 0 to -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }

    let map = new Map();

    // Edge case: sum 0 exists before array starts
    map.set(0, -1);

    let sum = 0;
    let length = 0;

    for (let i = 0; i < nums.length; i++) {

        // Running sum
        sum += nums[i];

        // Have we seen this sum before?
        if (map.has(sum)) {

            // Current index - first occurrence
            length = Math.max(length, i - map.get(sum));

        } else {

            // Store first occurrence only
            map.set(sum, i);
        }
    }

    return length;
};