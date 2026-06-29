/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let ans=[]
    let array= new Array(nums.length+1).fill(0);
    let missing=-1;
    for(let i=0;i<nums.length;i++){
        array[nums[i]]++
    }
    for(let i=1;i<=nums.length;i++){
        if(array[i]===0){
        ans.push(i)
    }


    }
  return ans;  
};

