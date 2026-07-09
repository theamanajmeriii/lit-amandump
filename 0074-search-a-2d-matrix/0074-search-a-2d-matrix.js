/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=matrix.length;
    let n=matrix[0].length
    let low=0;
    let high=m*n-1

    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let row=Math.floor(mid/n);
        let col=mid%n;
        //conditon equals to target
        if(matrix[row][col]===target){
            return true;
        }

        //condition greater then
        else if(matrix[row][col]<target){
            low=mid+1
        }

        //condition which is smaller then
        else {
            high=mid-1;
        }
    }
    return false;
     
};



    