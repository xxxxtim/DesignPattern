class Search {
    constructor(arr, target) {
        this.arr = arr;
        this.target = target;
    }

    linear() {
        this.arr.map((value, index) => {
            if (value === this.target) {
                console.log(index);
                return index
            } else { return -1 }
        })
    }
    binary() {
        let startIndex = 0;
        let endIndex = this.arr.length - 1;
        while (endIndex >= startIndex) {
            let middleIndex = Math.floor((startIndex + endIndex) / 2);
            if (target === this.arr[middleIndex]) {
                console.log(middleIndex);
                return middleIndex;
            } else if (target > this.arr[middleIndex]) {
                startIndex = middleIndex + 1;
            } else { endIndex = middleIndex - 1 }
        }
        return -1;
    }
}

let array = [1, 2, 3, 4, 5, 6];
let target = 7;
let search = new Search(array, target);
// search.linear();
search.binary();