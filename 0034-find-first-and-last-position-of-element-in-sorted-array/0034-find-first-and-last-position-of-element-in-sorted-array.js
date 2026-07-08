/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
    var searchRange = function(nums, target) {

    let first = -1;
    let last = -1;

    // Find first occurrence
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            first = mid;
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    // Find last occurrence
    left = 0;
    right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            last = mid;
            left = mid + 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return [first, last];
    }

     
    
