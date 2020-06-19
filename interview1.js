class Car {
    constructor(name, plate) {
        this.name = name;
        this.plate = plate;
    }
};

class FastCar extends Car {
    constructor(name, plate) {
        super(name, plate);
        this.price = 1;
    }
};
class SlowCar extends Car {
    constructor(name, plate) {
        super(name, plate);
        this.price = 2;
    }
};
class Trip {
    constructor(car, distance) {
        this.car = car;
        this.distance = distance;
    };
    star() {
        console.log(`開始發車，車子名稱：${this.car.name}/車牌名稱:${this.car.plate}`)
    };
    end() {
        console.log(`到達目的，價格：${this.car.price * this.distance}`)
    }
}

let car = new FastCar('BMW', 'xq-9121');
let trip = new Trip(car, 10);
trip.star();
trip.end();
