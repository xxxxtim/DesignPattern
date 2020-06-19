// 創立class
class People {
    // constructor 用來引入靜態資源
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} 吃東西`);
    }
    speak() {
        console.log(`我的名字是${this.name},我的年紀是${this.age}`);
    }

}//class
let yachen = new People('yachen', 30);
yachen.eat();
yachen.speak();

let xxxtim = new People('xxxtim', 27);
xxxtim.eat();
xxxtim.speak();

// 子類繼承父類
class Student extends People {
    constructor(name, age, number) {
        // super:表示把參數傳給父類的構造函數執行
        super(name, age);
        this.number = number;
    }
    study() {
        console.log(`${this.name}study`);
    }
}

let titan = new Student('titan', 17, 'A123');
titan.study();
titan.eat();
