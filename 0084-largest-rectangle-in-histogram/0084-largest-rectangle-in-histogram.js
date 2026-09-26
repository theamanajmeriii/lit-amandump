/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    let n = heights.length;

    // NSR
    let stack = [];
    let right = new Array(n);

    for (let i = n - 1; i >= 0; i--) {

        while (
            stack.length > 0 &&
            heights[stack[stack.length - 1]] >= heights[i]
        ) {
            stack.pop();
        }

        if (stack.length === 0) {
            right[i] = n;
        } else {
            right[i] = stack[stack.length - 1];
        }

        stack.push(i);
    }


    // NSL
    let stack2 = [];
    let left = new Array(n);

    for (let i = 0; i < n; i++) {

        while (
            stack2.length > 0 &&
            heights[stack2[stack2.length - 1]] > heights[i]
        ) {
            stack2.pop();
        }

        if (stack2.length === 0) {
            left[i] = -1;
        } else {
            left[i] = stack2[stack2.length - 1];
        }

        stack2.push(i);
    }


    // Calculate maximum area
    let maxArea = 0;

    for (let i = 0; i < n; i++) {

        let width = right[i] - left[i] - 1;

        let area = width * heights[i];

        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
};