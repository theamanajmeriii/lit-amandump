/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {

    if (points.length === 1)
        return 1;
    let result=0

    for(let i=0;i<points.length;i++){
        let map= new Map();
        let [x1,y1]= points[i];
        for(let j=0;j<points.length;j++){
            if(i===j){
                continue;
            }
            let [x2,y2]=points[j];


        let dy=y2-y1;
        let dx=x2-x1;

        let theta= Math.atan2(dy, dx);

        map.set(theta,(map.get(theta) || 0)+1);

        result=Math.max(result,map.get(theta)+1)


        }
    }

    return result


     
};