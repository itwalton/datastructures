// Stack

class Stack {
  private stack: Array<number>;
  private stackSize: number;
  private lastIndex: number = -1;

  constructor (size: number) {
    this.stackSize = size;
    this.stack = new Array(size);
  }

  public push(ele: number): void {
    if (this.lastIndex + 1 >= this.stackSize) {
      return;
    }

    this.stack.push(ele);
    this.lastIndex = this.lastIndex + 1;
  };

  public pop(): number {
    if (this.lastIndex < 0) {
      return -1;
    }

    this.lastIndex = this.lastIndex - 1;
    return this.stack.pop();
  };
};

// main
(() => {
  const myStack = new Stack(10);

  myStack.push(1);
  myStack.push(2);

  console.log(myStack.pop());
})();