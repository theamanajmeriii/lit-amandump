/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let heap = new MaxHeap();

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {

        heap.push(matrix[i][j]);

        if (heap.size() > k) {
            heap.pop();
        }
    }
}

return heap.top();
 
    
};