/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack=[];
    let sum=0;

    for(let i=0;i<operations.length;i++){
        if(operations[i]==='C'){
            stack.pop();
        } else if(operations[i]==='D'){
            stack.push(stack[stack.length-1]*2)
        } else if(operations[i]==='+'){
            let last = stack[stack.length-1];
            let secondLast= stack[stack.length-2];

            stack.push(last+secondLast)
        } else{
            stack.push(Number(operations[i]));
        }
    }

    for(let i=0;i<stack.length;i++){
        sum+=stack[i]
    }

    return sum
     
};