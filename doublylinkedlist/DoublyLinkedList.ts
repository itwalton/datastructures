class Link {
  public val: number;
  public next: Link;
  public prev: Link;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  };

  public toString(): string {
    return "Link: " + this.val;
  };
};

class DoubleLinkedList {
  public firstLink: Link;
  public lastLink: Link;

  constructor() {
    this.firstLink = null;
    this.lastLink = null;
  };

  public insertInFirstPosition(val: number): void {
    const newLink: Link = new Link(val);

    if (this.firstLink === null && this.lastLink === null) {
      this.lastLink = newLink;
    } else {
      this.firstLink.prev = newLink;
    }

    newLink.next = this.firstLink;
    this.firstLink = newLink;
  };

  public insertInLastPosition(val: number): void {
    const newLink: Link = new Link(val);

    if (this.firstLink === null && this.lastLink === null) {
      this.firstLink = newLink;
    } else {
      this.lastLink.next = newLink;
    }

     newLink.prev = this.lastLink;
     this.lastLink = newLink;
  };

  public insertAfterKey(val: number, newVal: number): void {
    const newLink: Link = new Link(newVal);

    let link: Link = this.firstLink;
    while (link !== null) {
      if (link.val === val) {
        if (link === this.lastLink) {
          newLink.prev = this.lastLink;
          this.lastLink = newLink;
        } else {
          newLink.next = link.next;
          link.next.prev = newLink;
        }

        newLink.prev = link;
        link.next = newLink;
        break;
      }

      link = link.next;
    }
  };

  public insertInOrder(val: number): void {
    let newLink: Link = new Link(val);

    let previousLink: Link = null;
    let currentLink: Link = this.firstLink;

    while (currentLink !== null && currentLink.val < val) {
      previousLink = currentLink;
      currentLink = currentLink.next;
    }

    if (previousLink === null) {
      this.firstLink = newLink;
    } else {
      previousLink.next = newLink;
    }

    newLink.next = currentLink;
  };

  public toString(): string {
    let str: string = "";

    let link: Link = this.firstLink;
    while (link !== null) {
      str = str + " " + link.toString();

      if (link == this.lastLink) {
        break;
      }

      link = link.next;
    }

    return str;
  };
};

// main
(() => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.insertInFirstPosition(1);
  doubleLinkedList.insertInLastPosition(5);
  doubleLinkedList.insertAfterKey(1, 2);
  doubleLinkedList.insertInOrder(3);
  doubleLinkedList.insertInOrder(4);

  console.log(doubleLinkedList.toString());
})();

module.exports.Link = Link;
module.exports.DoubleLinkedList = DoubleLinkedList;