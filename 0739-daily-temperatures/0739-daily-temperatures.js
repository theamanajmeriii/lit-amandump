var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let idx = stack.pop();
            ans[idx] = i - idx;
        }

        stack.push(i);
    }

    return ans;
};