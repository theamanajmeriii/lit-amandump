/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;

for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
}

for (let i = 0; i < n; i++) {
    matrix[i].reverse();
}
    
};