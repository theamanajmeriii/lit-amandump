
var MinStack = function() {
    this.stack=[];
    this.MinStack=[]
    
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    let min = this.MinStack[this.MinStack.length - 1];
    this.stack.push(value);

    if(this.MinStack.length===0){
        this.MinStack.push(value)
    } else if(value<=min){
        this.MinStack.push(value);
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let element = this.stack.pop()
    if(this.MinStack[this.MinStack.length-1]===element){
        this.MinStack.pop()
    }
       
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.MinStack[this.MinStack.length - 1];
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */