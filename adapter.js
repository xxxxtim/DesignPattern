// 台灣插頭 -> 轉接器 -> 美國插座
class Adaptee {
    specificRequest() {
        return '台灣標準插頭'
    };
};

class Target {
    constructor() {
        this.adaptee = new Adaptee();
    }
    request() {
        let info = this.adaptee.specificRequest();
        return `${info} ->轉接器 -> 美國標準插座`
    }
}
// test 
let target = new Target;
console.log(target.request());