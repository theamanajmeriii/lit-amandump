/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ans=[]
    for(let i=0;i<matrix.length;i++){

        for(let j=0;j<matrix[0].length;j++){
            ans.push(matrix[i][j])
        }

    }
    let left=0;
    let right=ans.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(ans[mid]===target){
            return true
        }
        else if(ans[mid]>target){
            right=mid-1

        }
        else{
            left=mid+1
        }
    }

    return false;
    




    
};