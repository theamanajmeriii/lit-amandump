/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   

function inputjoin(str){
    let stack=[];
    for(let ch of str)

    if(ch==='#'){
        if(stack.length>0){
            stack.pop()
        }
    } else{
        stack.push(ch)
    }
    return stack.join('')
}
let result1= inputjoin(s);
let result2= inputjoin(t);

return result1===result2
};