/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     for (let i = 0; i < matrix.length; i++) {

        // Check if target lies in this row
        if (matrix[i][0] <= target && target <= matrix[i][matrix[0].length - 1]) {

            let left = 0;
            let right = matrix[0].length - 1;

            while (left <= right) {

                let mid = Math.floor((left + right) / 2);

                if (matrix[i][mid] === target) {
                    return true;
                }

                if (matrix[i][mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }

    return false;
};



    