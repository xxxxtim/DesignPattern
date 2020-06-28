class LinkList {
    constructor() {
        // the head of linklist
        this.head = null;
        // the length of linklist
        this.length = 0;
    }
    append(item) {
        let node = new Node(item);
        // case1 
        if (this.head == null) {
            this.head = node;
            console.table(this.head);
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            // while 執行完之後 current會到鏈表尾
            current.next = node
            console.table(this.head);
        }
        this.length++;
    }


}

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
let link = new LinkList;
link.append('yachen');
link.append('titan');
link.append('xxxtim');
