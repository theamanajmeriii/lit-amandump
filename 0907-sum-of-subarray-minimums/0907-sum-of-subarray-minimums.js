var sumSubarrayMins = function(arr) {
    const MOD = 1000000007;
    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
        stack.push(i);
    }

    stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        right[i] = stack.length ? stack[stack.length - 1] - i : n - i;
        stack.push(i);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = (ans + arr[i] * left[i] * right[i]) % MOD;
    }

    return ans;
};