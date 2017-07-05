class Leaf {
  public key: number;
  public name: string;

  public leftChild: Leaf;
  public rightChild: Leaf;

  constructor(key: number, name: string) {
    this.key = key;
    this.name = name;

    this.leftChild = null;
    this.rightChild = null;
  };

  public toString(): string {
    return this.name + " has a key of " + this.key;
  };
};

class BinaryTree {
  public root: Leaf;

  constructor() {
    this.root = null;
  };

  public addLeaf(key: number, name: string) {
    const newLeaf = new Leaf(key, name);

    if (this.root === null) {
      this.root = newLeaf;
    } else {
      let parentLeaf: Leaf;
      let focusLeaf: Leaf = this.root;
      while (true) {
        parentLeaf = focusLeaf;

        if (key < focusLeaf.key) {
          focusLeaf = focusLeaf.leftChild;

          if (focusLeaf === null) {
            parentLeaf.leftChild = newLeaf;
            return;
          }
        } else {
          focusLeaf = focusLeaf.rightChild;

          if (focusLeaf === null) {
            parentLeaf.rightChild = newLeaf;
            return;
          }
        }
      }
    }
  };

  public findLeaf(key: number): Leaf {
    let focusLeaf: Leaf = this.root;

    while (focusLeaf.key != key) {
      if (key < focusLeaf.key) {
        focusLeaf = focusLeaf.leftChild;
      } else {
        focusLeaf = focusLeaf.rightChild;
      }

      if (focusLeaf == null) {
        return null;
      }
    }

    return focusLeaf;
  };

  public getReplacementLeaf(leaf: Leaf): Leaf {
    let replacementParent = leaf;
    let replacementLeaf = leaf;

    let focusNode = leaf.rightChild;

    while (focusNode !== null) {
      replacementParent = replacementLeaf;
      replacementLeaf = focusNode;
      focusNode = focusNode.leftChild;
    }

    if (replacementLeaf !== leaf.rightChild) {
      replacementParent.leftChild = replacementLeaf.rightChild;
      replacementLeaf.rightChild = leaf.rightChild;
    }

    return replacementLeaf;
  };

  public remove(key: number): boolean {
    let parent = this.root;
    let focusLeaf = this.root;

    let isItALeftChild: boolean = true;
    while(focusLeaf.key !== key) {
      parent = focusLeaf;

      if (key < focusLeaf.key) {
        isItALeftChild = true;
        focusLeaf = focusLeaf.leftChild;
      } else {
        isItALeftChild = false;
        focusLeaf = focusLeaf.rightChild;
      }

      if (focusLeaf === null) {
        return false;
      }
    }

    // no children
    if (focusLeaf.leftChild == null && focusLeaf.rightChild == null) {
      if (focusLeaf == this.root) {
        this.root = null;
      } else if (isItALeftChild) {
        parent.leftChild = null;
      } else {
        parent.rightChild = null;
      }
    }

    // no right child
    else if(focusLeaf.rightChild == null) {
      if (focusLeaf == this.root) {
        this.root = focusLeaf.leftChild;
      } else if (isItALeftChild) {
        parent.leftChild = focusLeaf.leftChild;
      } else {
        parent.rightChild = focusLeaf.leftChild;
      }
    }

    // no left child
    else if (focusLeaf.leftChild == null) {
      if (focusLeaf == this.root) {
        this.root = focusLeaf.rightChild;
      } else if (isItALeftChild) {
        parent.leftChild = focusLeaf.rightChild;
      } else {
        parent.rightChild = focusLeaf.rightChild;
      }
    }

    // has two children
    else {
      let replacementLeaf = this.getReplacementLeaf(focusLeaf);

      if (focusLeaf == this.root) {
        this.root = replacementLeaf;
      } else if (isItALeftChild) {
        parent.leftChild = replacementLeaf;
      } else {
        parent.rightChild = replacementLeaf;
      }

      replacementLeaf.leftChild = focusLeaf.leftChild;
    }

    return true;
  };

  public inOrderTraverseTree(focusLeaf: Leaf): void {
    if (focusLeaf !== null) {
      this.inOrderTraverseTree(focusLeaf.leftChild);
      console.log(focusLeaf.toString());
      this.inOrderTraverseTree(focusLeaf.rightChild);
    }
  };

  public preOrderTraverseTree(focusLeaf: Leaf): void {
    if (focusLeaf !== null) {
      console.log(focusLeaf.toString());
      this.preOrderTraverseTree(focusLeaf.leftChild);
      this.preOrderTraverseTree(focusLeaf.rightChild);
    }
  };

  public postOrderTraverseTree(focusLeaf: Leaf): void {
    if (focusLeaf !== null) {
      this.postOrderTraverseTree(focusLeaf.leftChild);
      this.postOrderTraverseTree(focusLeaf.rightChild);
      console.log(focusLeaf.toString());
    }
  };

  public reverse(focusLeaf: Leaf): void {
    if (focusLeaf !== null) {
      const temp = focusLeaf.leftChild;
      focusLeaf.leftChild = focusLeaf.rightChild;
      focusLeaf.rightChild = temp;

      this.reverse(focusLeaf.leftChild);
      this.reverse(focusLeaf.rightChild);
    }
  };
}

// main
(() => {
  const binaryTree: BinaryTree = new BinaryTree();

  binaryTree.addLeaf(50, "Jim");
  binaryTree.addLeaf(25, "James");
  binaryTree.addLeaf(15, "Joe");
  binaryTree.addLeaf(30, "Jeff");
  binaryTree.addLeaf(75, "Jarry");
  binaryTree.addLeaf(85, "Joel");

  binaryTree.inOrderTraverseTree(binaryTree.root);
  binaryTree.reverse(binaryTree.root);
  console.log("***********");
  binaryTree.inOrderTraverseTree(binaryTree.root);

  // binaryTree.inOrderTraverseTree(binaryTree.root);
  // binaryTree.preOrderTraverseTree(binaryTree.root);
  // binaryTree.postOrderTraverseTree(binaryTree.root);

  // console.log(binaryTree.findLeaf(15).toString());

  // binaryTree.preOrderTraverseTree(binaryTree.root);
  // console.log("************");
  // binaryTree.remove(15);
  // binaryTree.preOrderTraverseTree(binaryTree.root);
  // console.log("************");
  // binaryTree.remove(25);
  // binaryTree.preOrderTraverseTree(binaryTree.root);
  // console.log("************");
  // binaryTree.remove(75);
  // binaryTree.preOrderTraverseTree(binaryTree.root);
  // console.log("************");
  // binaryTree.remove(50);
  // binaryTree.preOrderTraverseTree(binaryTree.root);
})();