package queue;

public class Queue {
    private int queue[];
    private int queueSize;

    private int firstIndex = 0;
    private int lastIndex = -1;
    private int numOfElements = 0;

    public Queue(int queueSize) {
        this.queue = new int[queueSize];
        this.queueSize = queueSize;
    }

    public void enqueue(int num) {
        if (this.lastIndex + 1 >= this.queueSize) {
            return;
        }

        this.queue[this.lastIndex + 1] = num;
        this.lastIndex++;
        this.numOfElements++;
    }

    public int dequeue() {
        if (this.numOfElements <= 0) {
            return -1;
        }

        int firstNum = this.queue[this.firstIndex];
        this.firstIndex++;
        this.numOfElements--;
        return firstNum;
    }

    public static void main(String[] args) {
        Queue q = new Queue(5);
        q.enqueue(5);
        q.enqueue(4);
        q.enqueue(3);
        q.enqueue(2);
        q.enqueue(1);
        System.out.println(q.dequeue());
        System.out.println(q.dequeue());
        System.out.println(q.dequeue());
        System.out.println(q.dequeue());
        System.out.println(q.dequeue());
    }
}
