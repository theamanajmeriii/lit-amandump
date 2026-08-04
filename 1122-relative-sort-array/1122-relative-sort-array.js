//review
var relativeSortArray = function(arr1, arr2) {
    let map = new Map();

    for (let num of arr1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let ans = [];

    for (let num of arr2) {
        while (map.get(num) > 0) {
            ans.push(num);
            map.set(num, map.get(num) - 1);
        }
        map.delete(num);
    }

    let rest = [];

    for (let [num, freq] of map) {
        while (freq--) {
            rest.push(num);
        }
    }

    rest.sort((a, b) => a - b);

    return ans.concat(rest);
};