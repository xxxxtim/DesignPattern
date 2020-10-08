// https://www.itread01.com/content/1545559028.html


// 查詢陣列中出現次數最多的元素
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
    // console.log(allNames)

    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    // console.log(allNames)
    return allNames;
}, {});
// console.log(countedNames)


// 查詢陣列中出現次數最多的一個元素，並輸出次數

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
function getArrMaxRepetData(arr) {
    const obj = {}
    const newObj = {
        max: 0,
        key: 0
    }
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    console.log('obj', obj)
    for (const i in obj) {
        if (obj[i] > newObj.max) {
            newObj.max = obj[i]
            newObj.key = i
        }
    }
    return newObj
}
console.log(getArrMaxRepetData(names))  // {key: "Alice"max: 2}


// test
let arr = [1, 2, 3];
let temp = arr.reduce((total, value) => {
    // console.log(total + value)
    return total + value
}, 0)
console.log(temp)