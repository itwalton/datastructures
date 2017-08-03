package stack;

public class Stack {
    private int stack[];
    private int stackSize;
    private int lastIndex = -1;

    public Stack(int size) {
        this.stack = new int[size];
        stackSize = size;
    }

    public void push(int num) {
        if (this.lastIndex + 1 >= this.stackSize) {
            return;
        }

        this.lastIndex++;
        this.stack[this.lastIndex] = num;
    }

    public int pop() {
        if (this.lastIndex < 0) {
            return -1;
        }

        int num = this.stack[this.lastIndex];
        this.stack[this.lastIndex] = -1;
        this.lastIndex--;

        return num;
    }

    public static void main(String[] args) {
        Stack stack = new Stack(10);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
    }
}
