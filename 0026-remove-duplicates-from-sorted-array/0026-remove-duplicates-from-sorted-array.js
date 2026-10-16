/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let position = 1;

    for (let i = 1; i <= nums.length - 1; i++) {
        if (nums[i] != nums[position - 1]) {
            nums[position] = nums[i]
            position++

        }

    }

    return position
};