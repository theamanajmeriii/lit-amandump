/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //i solved it just after learning the pattern coolaf
    let heap= new MinHeap();
    for(let i=0;i<nums.length;i++){
        heap.push(nums[i]);

        if(heap.size()>k){
            heap.pop();
        }

    }
    return heap.top();
    
};