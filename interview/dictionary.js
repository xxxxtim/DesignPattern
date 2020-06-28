class Dictionary {
    constructor() {
        this.items = {}
    }
    // 判斷key值是否存在
    ifKey(key) {
        return this.items.hasOwnProperty(key) ? true : false;
    }
    // 添加element
    add(key, value) {
        this.items[key] = value;
        console.table(`add=>${this.items[key]}`)
    }
    // delete element
    delete(key) {
        if (this.ifKey(key)) {
            delete this.items;
            console.table(`delete=>${this.items[key]}`)
            // return true;
        }
        else {
            return false;
        }
    }
    get(key) {
        if (this.ifKey(key)) {
            console.table(`get=>${this.items}`)
            return this.items[key];
        }
        else {
            return undefined;
        }
    }

}

let dic = new Dictionary;
dic.add('yachen', 30);
dic.delete('yachen');
dic.get('yachen')
