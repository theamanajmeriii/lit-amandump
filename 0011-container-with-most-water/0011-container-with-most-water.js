/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let maxArea=0;
    while(left<right){
        width=right-left
        currentlength=Math.min(height[right],height[left]);
        area=width*currentlength

        maxArea=Math.max(maxArea,area);
        if(height[left]<height[right]){
            left++
        } else{
            right--
        }

    }
    return maxArea;
    
};