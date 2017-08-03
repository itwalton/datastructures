class Link {
  public val: number;
  public next: Link;

  constructor(num: number) {
    this.val = num;
    this.next = null;
  };

  public toString(): string {
    return "Link: " + this.val;
  };
};

class LinkedList {
  private firstLink: Link;

  constructor() {
    this.firstLink = null;
  };

  public isEmpty() {
    return this.firstLink === null;
  };

  public insert(num: number): void {
    const newLink: Link = new Link(num);

    if (this.firstLink !== null) {
      newLink.next = this.firstLink;
    }

    this.firstLink = newLink;
  };

  public remove(num: number): void {
    let prevLink: Link = this.firstLink;
    let focusLink: Link = this.firstLink;

    while (focusLink !== null) {
      if (focusLink.val === num) {
        prevLink.next = focusLink.next;
        break;
      }

      prevLink = focusLink;
      focusLink = focusLink.next;
    }
  };

  public find(num: number): Link {
    let link = this.firstLink;

    while (link !== null) {
      if (link.val === num) {
        break;
      }

      link = link.next;
    }

    return link;
  };

  public toString(): string {
    let str: string = "";

    let link: Link = this.firstLink;
    while (link !== null) {
      str = str + link.toString() + ", ";
      link = link.next;
    }

    return str;
  };
}

// main
(() => {
  const linkedList: LinkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  console.log(linkedList.toString());

  linkedList.remove(2);
  console.log(linkedList.toString());

  console.log(linkedList.find(3).toString());
})();