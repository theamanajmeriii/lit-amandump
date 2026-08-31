 /**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {

        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
        } 
        else {
            let total;

            let number1 = stack.pop();
            let number2 = stack.pop();

            if (tokens[i] === '+') {
                total = number2 + number1;
            }

            if (tokens[i] === '-') {
                total = number2 - number1;
            }

            if (tokens[i] === '/') {
                total = Math.trunc(number2 / number1);
            }

            if (tokens[i] === '*') {
                total = number2 * number1;
            }

            stack.push(total);
        }
    }

    return stack[0];
};