/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let rows=matrix.length;
    let cols=matrix[0].length;
    let heights= new Array(cols).fill(0);
    let maxArea = 0; 

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j]==="1"){
                heights[j]+=1
            } else{
                heights[j]=0
            }
        }
    

    //function
    let n= heights.length
    let stack=[];
    let left= new Array(n);
    let right= new Array(n);

    for(let i=0;i<n;i++){
        while(stack.length>0 && heights[stack[stack.length-1]] > heights[i]){
            stack.pop()
        } 

        if(stack.length===0){
            left[i]=-1
        } else{
            left[i]=stack[stack.length-1]
        }
        stack.push(i)
    }

    stack=[];

    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop()
        } 

        if(stack.length===0){
            right[i]=n
        } else{
            right[i]= stack[stack.length-1]
        }
        stack.push(i)
    }


    for(let i=0;i<n;i++){
        let width= right[i] - left[i] - 1;
        let area = width * heights[i];

         maxArea= Math.max(maxArea,area)
    } 
    } 

    

   return maxArea
   
};

