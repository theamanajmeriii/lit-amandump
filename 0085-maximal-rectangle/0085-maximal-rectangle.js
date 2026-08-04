var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;

    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let row of matrix) {
        for (let j = 0; j < cols; j++) {
            heights[j] = row[j] === "1" ? heights[j] + 1 : 0;
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    let arr = [...heights, 0];

    for (let i = 0; i < arr.length; i++) {
        while (
            stack.length &&
            arr[stack[stack.length - 1]] > arr[i]
        ) {
            let h = arr[stack.pop()];
            let w = stack.length
                ? i - stack[stack.length - 1] - 1
                : i;

            maxArea = Math.max(maxArea, h * w);
        }

        stack.push(i);
    }

    return maxArea;
}