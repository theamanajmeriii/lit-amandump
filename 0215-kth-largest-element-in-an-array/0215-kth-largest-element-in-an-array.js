var findKthLargest = function(nums, k) {
    let target = nums.length - k;

    function quickSelect(l, q) {
        let pivot = nums[q];

        let p = l;
        let i = l;
        let end = q;

        while (i <= end) {
            if (nums[i] < pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p++;
                i++;
            } 
            else if (nums[i] > pivot) {
                [nums[i], nums[end]] = [nums[end], nums[i]];
                end--;
            } 
            else {
                i++;
            }
        }

        if (target < p) {
            return quickSelect(l, p - 1);
        }

        if (target > end) {
            return quickSelect(end + 1, q);
        }

        return nums[target];
    }

    return quickSelect(0, nums.length - 1);
};