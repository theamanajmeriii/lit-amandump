/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let position=0;

    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]!=0){
            nums[position]=nums[i];
            position++;
        }
    }

    while(position<nums.length){
        nums[position]=0;
        position++
    }
    
};