/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
    if (set.has(num - 1)) {
    continue;
    }
    let current=num;
    let count=1

    while(set.has(current+1)){
        count++;
        current++;
        
    }
    longest=Math.max(count,longest);

  
    }
    return longest;


     
    
    
};