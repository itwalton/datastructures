class Queue {
   private queue: Array<number>;
   private queueSize: number;

   private first: number = -1;
   private last: number = -1;
   private numOfElements: number = 0;

   constructor(size: number) {
     this.queue = new Array(size);
     this.queueSize = size;
   };

   public enqueue(ele: number): void {
     if (this.last + 1 > this.queueSize) {
       return;
     }

     this.queue[this.last] = ele;

     this.last = this.last + 1;
     this.numOfElements = this.numOfElements + 1;
   };

   public dequeue(): number {
     if (this.numOfElements <= 0) {
       return -1;
     }

     const firstEle: number = this.queue[this.first];
     this.first = this.first + 1;
     this.numOfElements = this.numOfElements - 1;
     return firstEle;
   };
}

// main
(() => {
  const q = new Queue(10);

  q.enqueue(1);
  q.enqueue(7);

  console.log(q.dequeue());
})();