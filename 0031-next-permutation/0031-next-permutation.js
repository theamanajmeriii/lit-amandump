/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    // Step 1: Find Pivot
    let pivot = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }

    // Step 2: Find the smallest greater element and swap
    if (pivot !== -1) {

        let j = nums.length - 1;

        while (nums[j] <= nums[pivot]) {
            j--;
        }

        [nums[pivot], nums[j]] = [nums[j], nums[pivot]];
    }

    // Step 3: Reverse the suffix
    let left = pivot + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};