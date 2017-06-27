var Queue = (function () {
    function Queue(size) {
        this.first = -1;
        this.last = -1;
        this.numOfElements = 0;
        this.queue = new Array(size);
        this.queueSize = size;
    }
    ;
    Queue.prototype.enqueue = function (ele) {
        if (this.last + 1 > this.queueSize) {
            return;
        }
        this.queue[this.last] = ele;
        this.last = this.last + 1;
        this.numOfElements = this.numOfElements + 1;
    };
    ;
    Queue.prototype.dequeue = function () {
        if (this.numOfElements <= 0) {
            return -1;
        }
        var firstEle = this.queue[this.first];
        this.first = this.first + 1;
        this.numOfElements = this.numOfElements - 1;
        return firstEle;
    };
    ;
    return Queue;
}());
// main
(function () {
    var q = new Queue(10);
    q.enqueue(1);
    q.enqueue(7);
    console.log(q.dequeue());
})();
