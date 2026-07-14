/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

    // STEP 1: Create a Min Heap
    // Compare elements using distance at index 0
    const minHeap = new MinPriorityQueue({
        compare: (a, b) => a[0] - b[0]
    });


    // STEP 2: Visit every point one by one
    for (let i = 0; i < points.length; i++) {

        // Take x and y from current point
        // Example: [1, 3] → x = 1, y = 3
        let [x, y] = points[i];


        // STEP 3: Calculate distance from (0, 0)
        // No sqrt needed because we only compare distances
        let distance = x * x + y * y;


        // STEP 4: Put [distance, point] into Min Heap
        // Example: [10, [1, 3]]
        minHeap.enqueue([distance, points[i]]);
    }


    // STEP 5: Create answer array
    let ans = [];


    // STEP 6: Remove minimum distance k times
    for (let i = 0; i < k; i++) {

        // dequeue() removes smallest distance item
        // Example: [8, [-2, 2]]
        let [distance, point] = minHeap.dequeue();


        // STEP 7: We only need the point, not distance
        ans.push(point);
    }


    // STEP 8: Return k closest points
    return ans;
};

     
    
