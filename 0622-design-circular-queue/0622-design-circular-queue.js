var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
    this.capacity = k;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
    this.size++;
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.front];
};

MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.size === this.capacity;
};