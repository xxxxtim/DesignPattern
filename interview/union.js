// union 聯集
// A={1,2,3} B={2,3,4}

class Set {
    constructor() {
        this.items = {};
    }
    // 檢查集合中元素是否存在
    // this.has
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
    value() {
        let values = [];
        for (let i in this.items) {
            if (this.items.hasOwnProperty(i)) {
                values.push(this.items[i])
            }
        }
        return values;
    }
    // 取聯集
    union(otherSet) {
        let resultSet = new Set();
        let arr = this.value();
        for (let i = 0; i < arr.length; i++) {
            resultSet.add(arr[i]);
        }
        arr = otherSet.value();
        for (let i = 0; i < arr.length; i++) {
            resultSet.add(arr[i]);
        }
        console.table(resultSet);
        return resultSet;
    }
    // 取交集
    intersection(otherSet) {
        let resultSet = new Set();
        let arr = this.value();
        for (let i = 0; i < arr.length; i++) {
            if (otherSet.ifElement(arr[i])) {
                resultSet.add(arr[i]);
            }
        }
        console.table(resultSet)
        return resultSet;
    }
    // 取差集
    difference(otherSet) {
        let resultSet = new Set();
        let arr = this.value();
        for (let i = 0; i < arr.length; i++) {
            if (!otherSet.ifElement(arr[i])) {
                resultSet.add(arr[i]);
            }
        }
        console.table(resultSet)
        return resultSet;
    }
}//class

// let s = new Set();
// s.add(1);
// s.add(2);
// s.add(3);
// s.add(3);
// s.remove(2);
// s.size();

// union test
// let A = new Set();
// A.add(1);
// A.add(2);
// A.add(3);
// let B = new Set();
// B.add(2);
// B.add(3);
// B.add(4);
// let answer = A.union(B);

// intersection test
// let A = new Set();
// A.add(1);
// A.add(2);
// A.add(3);
// let B = new Set();
// B.add(2);
// B.add(3);
// B.add(4);
// let answer = A.intersection(B);

// difference tests
let A = new Set();
A.add(1);
A.add(2);
A.add(3);
let B = new Set();
B.add(2);
B.add(3);
B.add(4);
let answer = A.difference(B);