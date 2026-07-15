/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maxseen= -Infinity;
    let count=0
    for(let i=0;i<arr.length;i++){
        //comparing every element which is big and must check index
        maxseen= Math.max(maxseen,arr[i]);
        if(maxseen===i){
            count++
        }
       
    }
    return count;
};
