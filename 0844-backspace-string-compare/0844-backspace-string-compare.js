/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    //okay fine here we put some optimal shit 
    function checkstring(str){
        let count=0
        let result = "";
        
        for(let i=str.length-1;i>=0;i--){
            
            
            if(str[i]==='#'){
                count++   
            } else{
                if(count>0){
                    //next element skip ya remove
                    count--
                    continue;
                    
                }
                result += str[i]; // keep this character


            }
            
            
        }
        return result
    }
    let result1=checkstring(s);
    let result2=checkstring(t);

    return result1==result2
    
};