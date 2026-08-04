var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let currNum = 0;
    let currStr = "";

    for (let ch of s) {
        if (!isNaN(ch)) {
            currNum = currNum * 10 + Number(ch);
        } else if (ch === "[") {
            numStack.push(currNum);
            strStack.push(currStr);
            currNum = 0;
            currStr = "";
        } else if (ch === "]") {
            let repeat = numStack.pop();
            let prev = strStack.pop();
            currStr = prev + currStr.repeat(repeat);
        } else {
            currStr += ch;
        }
    }

    return currStr;
};