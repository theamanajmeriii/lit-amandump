
var StockSpanner = function() {
    this.stack=[];
    this.prices=[];
    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let i= this.prices.length;
    this.prices.push(price)

    while(this.stack.length>0 && this.prices[this.stack[this.stack.length-1]] <= price){
        this.stack.pop();
    }
    
    let span;
    if(this.stack.length===0){
        span= i+1;
    } else{
       span= i - this.stack[this.stack.length-1];
    }
    
    this.stack.push(i);
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */