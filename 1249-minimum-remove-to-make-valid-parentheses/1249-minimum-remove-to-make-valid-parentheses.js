var minRemoveToMakeValid = function(s) {
    let stack = [];
    let arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            stack.push(i);
        } else if (arr[i] === ")") {
            if (stack.length) {
                stack.pop();
            } else {
                arr[i] = "";
            }
        }
    }

    while (stack.length) {
        arr[stack.pop()] = "";
    }

    return arr.join("");
};