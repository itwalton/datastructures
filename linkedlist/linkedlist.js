var Link = (function () {
    function Link(num) {
        this.val = num;
        this.next = null;
    }
    ;
    Link.prototype.toString = function () {
        return "Link: " + this.val;
    };
    ;
    return Link;
}());
;
var LinkedList = (function () {
    function LinkedList() {
        this.firstLink = null;
    }
    ;
    LinkedList.prototype.isEmpty = function () {
        return this.firstLink === null;
    };
    ;
    LinkedList.prototype.insert = function (num) {
        var newLink = new Link(num);
        if (this.firstLink !== null) {
            newLink.next = this.firstLink;
        }
        this.firstLink = newLink;
    };
    ;
    LinkedList.prototype.remove = function (num) {
        var prevLink = this.firstLink;
        var focusLink = this.firstLink;
        while (focusLink !== null) {
            if (focusLink.val === num) {
                prevLink.next = focusLink.next;
                break;
            }
            prevLink = focusLink;
            focusLink = focusLink.next;
        }
    };
    ;
    LinkedList.prototype.find = function (num) {
        var link = this.firstLink;
        while (link !== null) {
            if (link.val === num) {
                break;
            }
            link = link.next;
        }
        return link;
    };
    ;
    LinkedList.prototype.toString = function () {
        var str = "";
        var link = this.firstLink;
        while (link !== null) {
            str = str + link.toString() + ", ";
            link = link.next;
        }
        return str;
    };
    ;
    return LinkedList;
}());
// main
(function () {
    var linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    console.log(linkedList.toString());
    linkedList.remove(2);
    console.log(linkedList.toString());
    console.log(linkedList.find(3).toString());
    console.log(linkedList.find(4));
})();
