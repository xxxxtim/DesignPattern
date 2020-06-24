function iterator(arr) {
    // 生成一個迭代器
    let it = arr[Symbol.iterator]();
    let item = { done: false };
    while (!item.done) {
        item = it.next();
        console.log(item.value);
        console.log(item.done);
    }
    if (!item.done) {
        console.log(item.value);
    }
}

function iterator1(arr) {
    for (let item of arr) {
        console.log(item);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
iterator(arr);
iterator1(arr);