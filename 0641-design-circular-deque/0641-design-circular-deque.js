var MyCircularDeque = function(k) {
    this.deque = new Array(k);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
    this.capacity = k;
};

MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.deque[this.front] = value;

    if (this.size === 0) this.rear = this.front;
    this.size++;
    return true;
};

MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.capacity;
    this.deque[this.rear] = value;

    if (this.size === 0) this.front = this.rear;
    this.size++;
    return true;
};

MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;
    return true;
};

MyCircularDeque.prototype.getFront = function() {
    return this.isEmpty() ? -1 : this.deque[this.front];
};

MyCircularDeque.prototype.getRear = function() {
    return this.isEmpty() ? -1 : this.deque[this.rear];
};

MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

MyCircularDeque.prototype.isFull = function() {
    return this.size === this.capacity;
};