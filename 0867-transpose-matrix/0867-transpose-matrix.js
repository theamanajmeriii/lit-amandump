/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    rows = matrix.length;
    cols = matrix[0].length;
    let ans = new Array(cols)
    .fill(0)
    .map(() => new Array(rows));

    for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        ans[j][i] = matrix[i][j];
    }
}

return ans;
    
};