class People {
    // constructor 用來引入靜態資源
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }
    say() {
        console.log('i am people');
    }
}//class

class A extends People {
    constructor(name, house) {
        super(name, house);
    }
    say() {
        console.log('i am A');
    }
}

class B extends People {
    constructor(name, house) {
        super(name, house);
    }
    say() {
        console.log('i am B');
    }
}

class House {
    constructor(city) {
        this.city = city;
    }
    showCity() {
        console.log(`${this.city}`);
    }
}

let aHouse = new House('taipei');
let a = new A('a', aHouse);
a.say();
let b = new B('b');
b.say();