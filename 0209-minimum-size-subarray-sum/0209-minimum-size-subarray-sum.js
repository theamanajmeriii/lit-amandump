/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=0;
    let sum=0;
    let minlength= Infinity;
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];
        while(sum>=target){
            minlength= Math.min(minlength,right-left+1)
            sum-=nums[left];
            left++
        }
        
    }
    return minlength===Infinity? 0:minlength;


     
    
};
 