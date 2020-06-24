// queue原理 ：FIFO
class Queue {
    constructor(arr, item) {
        this.arr = arr;
        this.item = item;
    }
    enque() {
        this.arr.push(this.item);
        console.table(this.arr);
    }
    dequeue() {
        this.arr.shift();
        console.table(this.arr);
    }
}

let array = [1, 2, 3, 4, 5, 6];
let item = 'hhh';
let queue = new Queue(array, item);
queue.enque();
queue.dequeue();
