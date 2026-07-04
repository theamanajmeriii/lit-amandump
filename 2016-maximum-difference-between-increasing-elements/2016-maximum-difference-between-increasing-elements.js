/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = -1;
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {

        let maxL = nums[i] - min;
        if(maxL>0){max = Math.max(max, maxL);
}
        
        min = Math.min(min, nums[i]);

    }

    return max;
};