class HashTable {
    constructor() {
        this.items = [];
    }
    // 散列函數
    // letter -> ascii ->number
    loseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
        }
        return hash % 37;
    }
    add(key, value) {
        let position = this.loseHashCode(key)
        console.table(`${key}->${position}->${value}`)
        this.items[position] = value;
    }
    remove(key) {
        this.items[this.loseHashCode(key)] = undefined;
        console.table(this.items);

    }
    search(key) {
        console.log(this.items[this.loseHashCode(key)])
    }
    getItems() {
        console.table(this.items);
    }
}

let h = new HashTable;
h.add('yachen', 30);
h.add('titan', 10);
h.add('xxxtim', 20);
h.remove('yachen');
h.search('xxxtim');
h.getItems();