
var MinStack = function() {
    this.stack=[];
    this.Min = Infinity;
    
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.stack.length===0){
        this.stack.push(value);
        this.min=value
    } else if(value >= this.min){
        this.stack.push(value);
    } else{
        this.stack.push(2*value - this.min);
        this.min=value
    }
     
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top = this.stack.pop();
    if(top <= this.min){
        this.min= 2*this.min - top
    }  
     
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top= this.stack[this.stack.length-1]
    if(top < this.min){
        return this.min
    }
    return top;
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */