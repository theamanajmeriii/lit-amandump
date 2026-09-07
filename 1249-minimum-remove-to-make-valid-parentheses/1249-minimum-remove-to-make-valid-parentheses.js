/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack=[];
    let result = [];

    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            result.push(s[i]);
            stack.push(result.length - 1);
            
        } else if(s[i]===')'){
            if(stack.length===0){
                continue;
            } else{
                stack.pop();
                result.push(s[i])
            }
        } 

        else{
            result.push(s[i]);
        }
    }

    while(stack.length > 0){
        result.splice(stack.pop(), 1);
    }


    return result.join('')
};