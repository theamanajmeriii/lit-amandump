/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack=[];
    let ans= new Array(nums.length);

    for(let i= 2* nums.length-1;i>=0;i--){
        let index= i%nums.length;

        while(stack.length>0 && stack[stack.length-1]<=nums[index]){
            stack.pop();
        }

        if(stack.length===0){
            ans[index]=-1
        } else{
            ans[index]= stack[stack.length-1]
        }

        stack.push(nums[index])

    }
    return ans


    
};