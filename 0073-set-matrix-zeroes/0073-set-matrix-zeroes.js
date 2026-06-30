/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let firstRow= false;
    let firstCol = false;

    for(let j=0;j<cols;j++){
        if(matrix[0][j]===0){
            firstRow= true;
        }
    }

    for(let i=0;i<rows;i++){
        if(matrix[i][0]===0){
            firstCol= true;
        }
    }

    //mark rows and column
    for(let i=1;i<rows;i++){
        for(let j=1;j<cols;j++){
            if(matrix[i][j]===0){
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }
   
       // Set zeroes using markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero first row
    if (firstRow) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero first column
    if (firstCol) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};


      






 

    