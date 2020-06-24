// queue原理 ：FILO
class Stack {
    constructor(arr, item) {
        this.arr = arr;
        this.item = item;
    }
    push() {
        this.arr.push(this.item);
        console.table(this.arr);
    }
    pop() {
        this.arr.pop();
        console.table(this.arr);
    }
}

let array = [1, 2, 3, 4, 5, 6];
let item = 'hhh';
let stack = new Stack(array, item);
stack.push();
stack.pop();
