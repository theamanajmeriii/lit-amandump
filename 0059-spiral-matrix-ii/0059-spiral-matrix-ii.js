/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));

    let top=0;
    let bottom=n-1;
    let left=0;
    let right= n-1

    let nums=1;
    while(left<=right && top<=bottom){
        for(let j=left;j<=right;j++){
            matrix[top][j]=nums++
        }
        top++
        for(let i=top;i<=bottom;i++){
            matrix[i][right]=nums++
        }
        right--
        if(top<=bottom){
            for(let j=right;j>=left;j--){
            matrix[bottom][j]=nums++
        }
        bottom--
        }
        
        if(left<=right){
            for(let i=bottom;i>=top;i--){
            matrix[i][left]=nums++
        }
        left++
        }
        
    }

    return matrix
    
};