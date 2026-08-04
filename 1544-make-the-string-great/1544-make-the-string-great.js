var makeGood = function(s) {
    let stack = [];

    for (let ch of s) {
        if (
            stack.length &&
            Math.abs(stack[stack.length - 1].charCodeAt(0) - ch.charCodeAt(0)) === 32
        ) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.join("");
};