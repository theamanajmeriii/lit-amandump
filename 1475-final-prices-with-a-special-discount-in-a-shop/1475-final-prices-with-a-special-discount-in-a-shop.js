/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack=[];
    let n= prices.length-1
    let ans = new Array(prices.length)
    for(let i=n;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]>prices[i]){
            stack.pop();
        }

        if(stack.length===0){
            ans[i]=prices[i]
        } else{
            ans[i]=prices[i]- stack[stack.length-1]
        }
        stack.push(prices[i]);

    }
    return ans
    
};