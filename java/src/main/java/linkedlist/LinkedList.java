package linkedlist;

class Node {
    public Node next;
    public int data;

    public Node(int data) {
        this.next = null;
        this.data = data;
    }
}

public class LinkedList {
    private Node firstNode;

    public LinkedList() {
        this.firstNode = null;
    }

    public void insert(int data) {
        Node newNode = new Node(data);

        if (this.firstNode == null) {
            this.firstNode = newNode;
        } else {
            Node focusNode = this.firstNode;
            while (focusNode.next != null) {
                focusNode = focusNode.next;
            }

            focusNode.next = newNode;
        }
    }

    public void insertInOrder(int data) {
        Node newNode = new Node(data);

        if (this.firstNode == null) {
            this.firstNode = newNode;
        } else if (this.firstNode.data > data) {
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        } else {
            Node parentNode = this.firstNode;
            Node focusNode = this.firstNode;

            while (focusNode.data < data) {
                parentNode = focusNode;
                focusNode = focusNode.next;
            }

            parentNode.next = newNode;
            newNode.next = focusNode;
        }
    }

    public void print() {
        Node focusNode = this.firstNode;
        while (focusNode != null) {
            System.out.println(focusNode.data);
            focusNode = focusNode.next;
        }
    }

    public static void main(String[] args) {
        LinkedList linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(3);
        linkedList.insertInOrder(2);
        linkedList.print();

        System.out.println("***************");
        linkedList.insertInOrder(0);
        linkedList.print();
    }
}
