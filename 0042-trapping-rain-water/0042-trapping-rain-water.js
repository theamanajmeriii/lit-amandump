/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length

    let leftmax = new Array(n);
    let rightmax = new Array(n);


    leftmax[0] = height[0];
    rightmax[n - 1] = height[n - 1];

    for (let i = 1; i < n; i++) {
        leftmax[i] = Math.max(leftmax[i - 1], height[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        rightmax[i] = Math.max(rightmax[i + 1], height[i])
    }

    let water = 0;
    for (let i = 0; i < n; i++) {
        let minus = Math.min(leftmax[i], rightmax[i]);
        water += minus - height[i]

    }

    return water

};