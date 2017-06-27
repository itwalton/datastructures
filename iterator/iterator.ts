declare function require(name:string);
const Link = require("../doublelinkedlist/doublelinkedlist").Link;
const DoubleLinkedList = require("../doublelinkedlist/doublelinkedlist").DoubleLinkedList;

class Iterator {
  private currentLink: Link;
  private prevLink: Link;
  private doubleLinkedList: DoubleLinkedList;

  constructor(doubleLinkedList: DoubleLinkedList) {
    this.currentLink = null;
    this.prevLink = doubleLinkedList.lastLink;

    this.doubleLinkedList = doubleLinkedList;
  }

  public hasNext(): boolean {
    return ((this.currentLink === null && this.doubleLinkedList.firstLink !== null)
      || this.currentLink.next !== null);
  };

  public next(): Link {
    if (this.hasNext() === false) {
      return null;
    }

    this.prevLink = this.currentLink;
    this.currentLink = this.currentLink !== null
            ? this.currentLink.next
            : this.doubleLinkedList.firstLink;
    return this.currentLink;
  };
};

// main
(() => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.insertInFirstPosition(5);
  doubleLinkedList.insertInFirstPosition(4);
  doubleLinkedList.insertInFirstPosition(3);
  doubleLinkedList.insertInFirstPosition(2);
  doubleLinkedList.insertInFirstPosition(1);

  const it: Iterator = new Iterator(doubleLinkedList);
  while (it.hasNext()) {
    console.log(it.next().toString());
  }
})();