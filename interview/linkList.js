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
    // 鏈表某一項插入項目
    insert(position, item) {
        let node = new Node(item);
        // 越界問題
        if (position > -1 && position < this.length) {
            // 插入在開頭位置
            if (position == 0) {
                let current = this.head;
                this.head = node;
                this.head.next = current;
                console.table(this.head);
            }
            // 不是插入在開頭位置
            else {
                let index = 0;
                let current = this.head;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current;
                console.table(this.head);
            }
            this.length++;
        }
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
link.insert(1, 'xxxtim');
