var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let j = 0;

    for (let x of pushed) {
        stack.push(x);

        while (
            stack.length &&
            stack[stack.length - 1] === popped[j]
        ) {
            stack.pop();
            j++;
        }
    }

    return stack.length === 0;
};