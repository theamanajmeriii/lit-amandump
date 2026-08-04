var removeDuplicates = function(s, k) {
    let stack = [];

    for (let ch of s) {
        if (stack.length && stack[stack.length - 1][0] === ch) {
            stack[stack.length - 1][1]++;

            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([ch, 1]);
        }
    }

    let ans = "";

    for (let [ch, count] of stack) {
        ans += ch.repeat(count);
    }

    return ans;
};