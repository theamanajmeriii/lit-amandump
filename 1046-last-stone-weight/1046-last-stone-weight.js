/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
        heap.enqueue(stones[i])
    }

    while (heap.size() > 1) {
        let first = heap.dequeue();
        let second = heap.dequeue();

        let sum = first - second;
        if (sum > 0) {
            heap.enqueue(sum);
        }
    }
    if (heap.size() === 1) {
        return heap.front();
    }

    return 0;

};