/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
     
    let frequency = new Array(nums.length + 1).fill(0);
    let duplicate = -1;
    let missing = -1;

    for(let i=0;i<nums.length;i++){
        frequency[nums[i]]++
    }
    for(let i=1;i<=nums.length;i++){

        if(frequency[i]===2){
        duplicate=i}

        if(frequency[i]===0){
        missing=i;
    }
    }

    

    return[duplicate,missing];
     
    
};