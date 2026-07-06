/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let count=1;
    let longest=1;

    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-1;i++){
        
        if((nums[i+1]-nums[i])===1){
            count++;
            longest= Math.max(count,longest);
        }
        else if((nums[i+1]-nums[i]===0)){
            continue;
        }
        else{
            count=1
        }

    }
    return longest
    
};