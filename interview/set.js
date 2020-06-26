// var apple = { 1: 23 };
// console.log(apple.hasOwnProperty(1));

class Set {
    constructor() {
        this.items = {};
    }
    // 檢查集合中元素是否存在
    ifElement(value) {
        return this.items.hasOwnProperty(value)
    }
    // 添加element
    add(value) {
        if (!this.items.hasOwnProperty(value)) {
            this.items[value] = value;
            console.table(this.items);
            return value;
        }
        return false;
    }
    // 移除element
    remove(value) {
        if (this.items.hasOwnProperty(value)) {
            delete this.items[value];
            console.table(this.items);
            return true;
        }
        return false;
    }
    // 清除所有 element
    clear() {
        this.items = {};
    }
    size() {
        // 法一
        // let count = 0;
        // for (let i in this.items) {
        //     count++;
        // }
        // console.log(count);
        // 法二
        console.log((Object.keys(this.items).length));
    }
}//class

let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.remove(2);
s.size();