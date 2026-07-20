/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n);
    dp[0]=1;

    let num2=0;
    let num3=0;
    let num5=0;

    for(let i=1;i<n;i++){

        next2= dp[num2] *2;
        next3= dp[num3]* 3;
        next5= dp[num5]* 5;


        let min = Math.min(next2,next3,next5);
        dp[i]=min

        if(min===next2){
            num2++
        }
        if(min===next3){
            num3++
        }
        if(min===next5){
            num5++
        }

    }
    return dp[n-1]

    
   
}