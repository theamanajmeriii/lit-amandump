/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let heap = new MaxPriorityQueue(x => x[1]);

    for (let [char, frequency] of map) {
        heap.enqueue([char, frequency]);
    }

    let ans = [];

    while (!heap.isEmpty()) {

        let [char, frequency] = heap.dequeue();

        for (let i = 0; i < frequency; i++) {
            ans.push(char);
        }
    }

    return ans.join("");
};