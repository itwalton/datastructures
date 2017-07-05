var Link = (function () {
    function Link(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    ;
    Link.prototype.toString = function () {
        return "Link: " + this.val;
    };
    ;
    return Link;
}());
;
var DoubleLinkedList = (function () {
    function DoubleLinkedList() {
        this.firstLink = null;
        this.lastLink = null;
    }
    ;
    DoubleLinkedList.prototype.insertInFirstPosition = function (val) {
        var newLink = new Link(val);
        if (this.firstLink === null && this.lastLink === null) {
            this.lastLink = newLink;
        }
        else {
            this.firstLink.prev = newLink;
        }
        newLink.next = this.firstLink;
        this.firstLink = newLink;
    };
    ;
    DoubleLinkedList.prototype.insertInLastPosition = function (val) {
        var newLink = new Link(val);
        if (this.firstLink === null && this.lastLink === null) {
            this.firstLink = newLink;
        }
        else {
            this.lastLink.next = newLink;
        }
        newLink.prev = this.lastLink;
        this.lastLink = newLink;
    };
    ;
    DoubleLinkedList.prototype.insertAfterKey = function (val, newVal) {
        var newLink = new Link(newVal);
        var link = this.firstLink;
        while (link !== null) {
            if (link.val === val) {
                if (link === this.lastLink) {
                    newLink.prev = this.lastLink;
                    this.lastLink = newLink;
                }
                else {
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
    ;
    DoubleLinkedList.prototype.insertInOrder = function (val) {
        var newLink = new Link(val);
        var previousLink = null;
        var currentLink = this.firstLink;
        while (currentLink !== null && currentLink.val < val) {
            previousLink = currentLink;
            currentLink = currentLink.next;
        }
        if (previousLink === null) {
            this.firstLink = newLink;
        }
        else {
            previousLink.next = newLink;
        }
        newLink.next = currentLink;
    };
    ;
    DoubleLinkedList.prototype.reverse = function () {
        var temp = null;
        var current = this.firstLink;
        while (current !== null) {
            console.log(current.toString());
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
            console.log(current);
        }
        if (temp !== null) {
            this.firstLink = temp.prev;
        }
    };
    ;
    DoubleLinkedList.prototype.toString = function () {
        var str = "";
        var link = this.firstLink;
        while (link !== null) {
            str = str + " " + link.toString();
            if (link == this.lastLink) {
                break;
            }
            link = link.next;
        }
        return str;
    };
    ;
    return DoubleLinkedList;
}());
;
// main
(function () {
    var doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.insertInFirstPosition(1);
    doubleLinkedList.insertInLastPosition(5);
    doubleLinkedList.insertAfterKey(1, 2);
    doubleLinkedList.insertInOrder(3);
    doubleLinkedList.insertInOrder(4);
    console.log(doubleLinkedList.toString());
    console.log("********");
    doubleLinkedList.reverse();
    console.log(doubleLinkedList.toString());
})();
module.exports.Link = Link;
module.exports.DoubleLinkedList = DoubleLinkedList;
