package binarytree;

class Node {
    public int key;
    public String data;

    public Node leftChild = null;
    public Node rightChild = null;

    public Node(int key, String data) {
        this.key = key;
        this.data = data;
    };
}

public class BinaryTree {
    public Node root;

    public BinaryTree () {
        this.root = null;
    }

    public boolean addNode(int key, String data) {
        Node newNode = new Node(key, data);

        if (this.root == null) {
            this.root = newNode;
            return true;
        }

        Node parentNode;
        Node focusNode = this.root;
        while (true) {
            parentNode = focusNode;

            if (key < focusNode.key) {
                focusNode = focusNode.leftChild;

                if (focusNode == null) {
                    parentNode.leftChild = newNode;
                    return true;
                }
            } else {
                focusNode = focusNode.rightChild;

                if (focusNode == null) {
                    parentNode.rightChild = newNode;
                    return true;
                }
            }
        }
    }

    public void findNode(int key) {
        Node focusNode = this.root;

        while (focusNode.key != key) {
            if (focusNode.key > key) {
                focusNode = focusNode.leftChild;
            } else {
                focusNode = focusNode.rightChild;
            }

            if (focusNode == null) {
                System.out.println("null");
                return;
            }
        }

        System.out.println(focusNode.key + " " + focusNode.data);
    }

    public Node getReplacementNode(Node replacedNode) {
        Node replacementParentNode = replacedNode;
        Node replacementNode = replacedNode;

        Node focusNode = replacedNode.rightChild;
        while (focusNode != null) {
            replacementParentNode = replacementNode;
            replacementNode = focusNode;
            focusNode = focusNode.leftChild;
        }

        if (replacementNode != replacedNode.leftChild) {
            replacementParentNode.leftChild = replacementNode.rightChild;
            replacementNode.rightChild = replacedNode.rightChild;
        }

        return replacementNode;
    }

    // delete node
    public boolean remove(int key) {
        Node parentNode = this.root;
        Node focusNode = this.root;

        boolean isLeftChild = true;
        while (focusNode.key != key) {
            parentNode = focusNode;

            isLeftChild = key < focusNode.key;
            if (isLeftChild) {
                focusNode = focusNode.leftChild;
            } else {
                focusNode = focusNode.rightChild;
            }

            if (focusNode == null) {
                return false;
            }
        }

        // no children
        if (focusNode.leftChild == null && focusNode.rightChild == null) {
            if (focusNode == this.root) {
                this.root = null;
            } else if (isLeftChild) {
                parentNode.leftChild = null;
            } else {
                parentNode.rightChild = null;
            }
        }

        // no right child
        else if (focusNode.rightChild == null) {
            if (focusNode == this.root) {
                this.root = focusNode.leftChild;
            } else if (isLeftChild) {
                parentNode.leftChild = focusNode.leftChild;
            } else {
                parentNode.rightChild = focusNode.leftChild;
            }
        }

        // no left child
        else if (focusNode.leftChild == null) {
            if (focusNode == this.root) {
                this.root = focusNode.rightChild;
            } else if (isLeftChild) {
                parentNode.leftChild = focusNode.rightChild;
            } else {
                parentNode.rightChild = focusNode.rightChild;
            }
        }

        // has children
        else {
            Node replacementNode = this.getReplacementNode(focusNode);

            if (focusNode == this.root) {
                this.root = replacementNode;
            } else if (isLeftChild) {
                parentNode.leftChild = replacementNode;
            } else {
                parentNode.rightChild = replacementNode;
            }

            replacementNode.leftChild = focusNode.leftChild;
        }

        return true;
    }

    public void reverse(Node node) {
        if (node != null) {
            Node tempNode = node.leftChild;
            node.leftChild = node.rightChild;
            node.rightChild = tempNode;

            this.reverse(node.leftChild);
            this.reverse(node.rightChild);
        }
    }

    public Node findNodeWithClosestKey(int key) {
        Node closestNode = this.root;
        Node focusNode = this.root;

        int diff = Math.abs(focusNode.key - key);
        while (focusNode != null) {
            int newDiff = Math.abs(focusNode.key - key);
            if (diff > newDiff) {
                diff = newDiff;
                closestNode = focusNode;
            }

            if (focusNode.key > key) {
                focusNode = focusNode.leftChild;
            } else {
                focusNode = focusNode.rightChild;
            }
        }

        return closestNode;
    }

    // Breadth-first traversal
    public void preOrderTraversal(Node node) {
        if (node != null) {
            System.out.println(node.key + " " + node.data);
            this.preOrderTraversal(node.leftChild);
            this.preOrderTraversal(node.rightChild);
        }
    }

    public void inOrderTraversal(Node node) {
        if (node != null) {
            this.inOrderTraversal(node.leftChild);
            System.out.println(node.key + " " + node.data);
            this.inOrderTraversal(node.rightChild);
        }
    }

    public void postOrderTraversal(Node node) {
        if (node != null) {
            this.postOrderTraversal(node.leftChild);
            this.postOrderTraversal(node.rightChild);
            System.out.println(node.key + " " + node.data);
        }
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();

        binaryTree.addNode(50, "Jim");
        binaryTree.addNode(25, "James");
        binaryTree.addNode(15, "Joe");
        binaryTree.addNode(30, "Jeff");
        binaryTree.addNode(75, "Jerry");
        binaryTree.addNode(80, "Joel");
        binaryTree.addNode(85, "Jack");

        binaryTree.preOrderTraversal(binaryTree.root);
        System.out.println("*************\n");
        binaryTree.inOrderTraversal(binaryTree.root);
        System.out.println("*************\n");
        binaryTree.postOrderTraversal(binaryTree.root);

        System.out.println("*************\n");
        binaryTree.findNode(85);

        System.out.println("*************\n");
        binaryTree.remove(85);
        binaryTree.preOrderTraversal(binaryTree.root);

        System.out.println("*************\n");
        binaryTree.addNode(85, "Jack");
        binaryTree.reverse(binaryTree.root);
        binaryTree.preOrderTraversal(binaryTree.root);

        System.out.println("*************\n");
        binaryTree.reverse(binaryTree.root);
        Node closestNode = binaryTree.findNodeWithClosestKey(32);
        System.out.println(closestNode.key + " " + closestNode.data);
        binaryTree.addNode(31, "Johnny");
        closestNode = binaryTree.findNodeWithClosestKey(32);
        System.out.println(closestNode.key + " " + closestNode.data);
    }
}
