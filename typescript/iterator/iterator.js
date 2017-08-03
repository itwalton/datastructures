var Link = require("../doublelinkedlist/doublelinkedlist").Link;
var DoubleLinkedList = require("../doublelinkedlist/doublelinkedlist").DoubleLinkedList;
var Iterator = (function () {
    function Iterator(doubleLinkedList) {
        this.currentLink = null;
        this.prevLink = doubleLinkedList.lastLink;
        this.doubleLinkedList = doubleLinkedList;
    }
    Iterator.prototype.hasNext = function () {
        return ((this.currentLink === null && this.doubleLinkedList.firstLink !== null)
            || this.currentLink.next !== null);
    };
    ;
    Iterator.prototype.next = function () {
        if (this.hasNext() === false) {
            return null;
        }
        this.prevLink = this.currentLink;
        this.currentLink = this.currentLink !== null
            ? this.currentLink.next
            : this.doubleLinkedList.firstLink;
        return this.currentLink;
    };
    ;
    return Iterator;
}());
;
// main
(function () {
    var doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.insertInFirstPosition(5);
    doubleLinkedList.insertInFirstPosition(4);
    doubleLinkedList.insertInFirstPosition(3);
    doubleLinkedList.insertInFirstPosition(2);
    doubleLinkedList.insertInFirstPosition(1);
    var it = new Iterator(doubleLinkedList);
    while (it.hasNext()) {
        console.log(it.next().toString());
    }
})();
