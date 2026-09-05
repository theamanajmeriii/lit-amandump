/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0)
    let stack=[];

    for(let i=temperatures.length-1;i>=0;i--){

        while(stack.length>0 && temperatures[stack[stack.length-1]] <= temperatures[i]){
            stack.pop();
        }


        if(stack.length===0){
            ans[i]=0
        } else{
            ans[i]= stack[stack.length-1] - i
        }

        stack.push(i);
    }

    return ans;
    
};