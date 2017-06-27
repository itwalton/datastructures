var Leaf = (function () {
    function Leaf(key, name) {
        this.key = key;
        this.name = name;
        this.leftChild = null;
        this.rightChild = null;
    }
    ;
    Leaf.prototype.toString = function () {
        return this.name + " has a key of " + this.key;
    };
    ;
    return Leaf;
}());
;
var BinaryTree = (function () {
    function BinaryTree() {
        this.root = null;
    }
    ;
    BinaryTree.prototype.addLeaf = function (key, name) {
        var newLeaf = new Leaf(key, name);
        if (this.root === null) {
            this.root = newLeaf;
        }
        else {
            var parentLeaf = void 0;
            var focusLeaf = this.root;
            while (true) {
                parentLeaf = focusLeaf;
                if (key < focusLeaf.key) {
                    focusLeaf = focusLeaf.leftChild;
                    if (focusLeaf === null) {
                        parentLeaf.leftChild = newLeaf;
                        return;
                    }
                }
                else {
                    focusLeaf = focusLeaf.rightChild;
                    if (focusLeaf === null) {
                        parentLeaf.rightChild = newLeaf;
                        return;
                    }
                }
            }
        }
    };
    ;
    BinaryTree.prototype.findLeaf = function (key) {
        var focusLeaf = this.root;
        while (focusLeaf.key != key) {
            if (key < focusLeaf.key) {
                focusLeaf = focusLeaf.leftChild;
            }
            else {
                focusLeaf = focusLeaf.rightChild;
            }
            if (focusLeaf == null) {
                return null;
            }
        }
        return focusLeaf;
    };
    ;
    BinaryTree.prototype.getReplacementLeaf = function (leaf) {
        var replacementParent = leaf;
        var replacementLeaf = leaf;
        var focusNode = leaf.rightChild;
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
    ;
    BinaryTree.prototype.remove = function (key) {
        var parent = this.root;
        var focusLeaf = this.root;
        var isItALeftChild = true;
        while (focusLeaf.key !== key) {
            parent = focusLeaf;
            if (key < focusLeaf.key) {
                isItALeftChild = true;
                focusLeaf = focusLeaf.leftChild;
            }
            else {
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
            }
            else if (isItALeftChild) {
                parent.leftChild = null;
            }
            else {
                parent.rightChild = null;
            }
        }
        else if (focusLeaf.rightChild == null) {
            if (focusLeaf == this.root) {
                this.root = focusLeaf.leftChild;
            }
            else if (isItALeftChild) {
                parent.leftChild = focusLeaf.leftChild;
            }
            else {
                parent.rightChild = focusLeaf.leftChild;
            }
        }
        else if (focusLeaf.leftChild == null) {
            if (focusLeaf == this.root) {
                this.root = focusLeaf.rightChild;
            }
            else if (isItALeftChild) {
                parent.leftChild = focusLeaf.rightChild;
            }
            else {
                parent.rightChild = focusLeaf.rightChild;
            }
        }
        else {
            var replacementLeaf = this.getReplacementLeaf(focusLeaf);
            if (focusLeaf == this.root) {
                this.root = replacementLeaf;
            }
            else if (isItALeftChild) {
                parent.leftChild = replacementLeaf;
            }
            else {
                parent.rightChild = replacementLeaf;
            }
            replacementLeaf.leftChild = focusLeaf.leftChild;
        }
        return true;
    };
    ;
    BinaryTree.prototype.inOrderTraverseTree = function (focusLeaf) {
        if (focusLeaf !== null) {
            this.inOrderTraverseTree(focusLeaf.leftChild);
            console.log(focusLeaf.toString());
            this.inOrderTraverseTree(focusLeaf.rightChild);
        }
    };
    ;
    BinaryTree.prototype.preOrderTraverseTree = function (focusLeaf) {
        if (focusLeaf !== null) {
            console.log(focusLeaf.toString());
            this.preOrderTraverseTree(focusLeaf.leftChild);
            this.preOrderTraverseTree(focusLeaf.rightChild);
        }
    };
    ;
    BinaryTree.prototype.postOrderTraverseTree = function (focusLeaf) {
        if (focusLeaf !== null) {
            this.postOrderTraverseTree(focusLeaf.leftChild);
            this.postOrderTraverseTree(focusLeaf.rightChild);
            console.log(focusLeaf.toString());
        }
    };
    ;
    return BinaryTree;
}());
// main
(function () {
    var binaryTree = new BinaryTree();
    binaryTree.addLeaf(50, "Jim");
    binaryTree.addLeaf(25, "James");
    binaryTree.addLeaf(15, "Joe");
    binaryTree.addLeaf(30, "Jeff");
    binaryTree.addLeaf(75, "Jarry");
    binaryTree.addLeaf(85, "Joel");
    // binaryTree.inOrderTraverseTree(binaryTree.root);
    // binaryTree.preOrderTraverseTree(binaryTree.root);
    // binaryTree.postOrderTraverseTree(binaryTree.root);
    // console.log(binaryTree.findLeaf(15).toString());
    binaryTree.preOrderTraverseTree(binaryTree.root);
    console.log("************");
    binaryTree.remove(15);
    binaryTree.preOrderTraverseTree(binaryTree.root);
    console.log("************");
    binaryTree.remove(25);
    binaryTree.preOrderTraverseTree(binaryTree.root);
    console.log("************");
    binaryTree.remove(75);
    binaryTree.preOrderTraverseTree(binaryTree.root);
    console.log("************");
    binaryTree.remove(50);
    binaryTree.preOrderTraverseTree(binaryTree.root);
})();
