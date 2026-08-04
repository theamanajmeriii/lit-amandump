//review
var calPoints = function(operations) {
    let stack = [];

    for (let op of operations) {
        if (op === "+") {
            let a = stack[stack.length - 1];
            let b = stack[stack.length - 2];
            stack.push(a + b);
        } else if (op === "D") {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === "C") {
            stack.pop();
        } else {
            stack.push(Number(op));
        }
    }

    return stack.reduce((sum, score) => sum + score, 0);
};