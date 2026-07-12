/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {

    function countzero(num){
        let count=0;
        while(num>0){
            num=Math.floor(num/5);
            count+=num
        }
        return count

    }

    let low=0;
    let high=5*k;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let zeroes= countzero(mid);

        if(zeroes===k){
            return 5;
        }

        else if(zeroes>k){
            high=mid-1
        } else{
            low=mid+1
        }

    }
    return 0

    
};