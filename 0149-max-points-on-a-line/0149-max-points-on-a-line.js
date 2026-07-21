/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length === 1) {
    return 1;
    }

    //brute force method, main logic is using slope formula that's it
    let result=0
    for(let i=0;i<points.length;i++){ 
        for(let j=i+1;j<points.length;j++){
            let count=2
            let [x1,y1]= points[i];
            let [x2,y2]= points[j];

             
            

            slopeOne=((y2 - y1)/(x2 - x1));

            for(let k=0;k<points.length;k++){
                if(k!=i && k!=j){
                let [x2,y2]= points[j];
                let [x3,y3]= points[k];

                slopeTwo=((y3-y2)/(x3-x2));

                if(slopeOne===slopeTwo){
                    count++
                }
                }
                
   
            }

            result= Math.max(result,count)

        }


    }

    return result

    
};