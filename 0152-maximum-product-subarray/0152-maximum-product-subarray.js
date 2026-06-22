 
var maxProduct = function(nums) {
    let maxending= nums[0];
    let minending= nums[0];
    let ans= nums[0];
    for(let i=1;i<nums.length;i++){
        let num =nums[i];
        let tempMax=Math.max(num,num*maxending,num*minending);
        let tempMin=Math.min(num,num*maxending,num*minending);

        maxending= tempMax;
    minending= tempMin;
    ans= Math.max(ans,maxending)
    }

    return ans
    
    
};