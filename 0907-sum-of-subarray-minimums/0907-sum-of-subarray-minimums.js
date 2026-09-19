/**
 * @param {number[]} arr
 * @return {number}
 */
 
 var sumSubarrayMins = function(arr) {
    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);

    // Nearest Smaller to Left
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (
            stack.length > 0 &&
            arr[stack[stack.length - 1]] >= arr[i]
        ) {
            stack.pop();
        }

        left[i] = stack.length === 0
            ? -1
            : stack[stack.length - 1];

        stack.push(i);
    }

    // Nearest Smaller to Right
    stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (
            stack.length > 0 &&
            arr[stack[stack.length - 1]] > arr[i]
        ) {
            stack.pop();
        }

        right[i] = stack.length === 0
            ? n
            : stack[stack.length - 1];

        stack.push(i);
    }

    // Calculate contribution of every element
    let sum = 0;
    const MOD = 1000000007;

    for (let i = 0; i < n; i++) {
        let ls = i - left[i];
        let rs = right[i] - i;

        let totalWays = ls * rs;

        sum = (sum + arr[i] * totalWays) % MOD;
    }

    return sum;
};