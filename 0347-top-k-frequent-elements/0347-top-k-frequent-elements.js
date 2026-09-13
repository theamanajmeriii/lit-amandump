 var topKFrequent = function(nums, k) {

    let heap = new MinPriorityQueue(x=>x[1]);
    let ans = [];
    let map= new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, frequency] of map) {

        heap.enqueue([num, frequency]);

        if (heap.size() > k) {
            heap.dequeue();
        }
    }

    while (heap.size() > 0) {
        ans.push(heap.front()[0]);
        heap.dequeue();
    }

    return ans;
};