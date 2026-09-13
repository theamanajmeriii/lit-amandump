/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
   
    let heap= new MaxPriorityQueue(x=>x[0]);


    for(let i=0;i<points.length;i++){
        let x = points[i][0];
        let y = points[i][1];

        let distance= x*x+y*y;

        heap.enqueue([distance,points[i]]);

        if(heap.size()>k){
            heap.dequeue();
        }

    }
    let ans=[];
    while(!heap.isEmpty()){
        let [distance,point] = heap.dequeue();
        ans.push(point);
        
    }

    return ans

    
};