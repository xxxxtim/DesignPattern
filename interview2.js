// parking
class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.camera = new Camera();
        this.display = new Display();
        // 存取攝影機拍攝返回的資料
        this.carlist = {};
    }
    in(car) {
        // 通過攝影機 得到資訊
        const info = this.camera.shot(car);
        // 停到某個停車位（隨機產生）
        const i = parseInt(Math.random() * 100 % 100);
        const place = this.floors[0].places[i];
        place.in();
        info.place = place;
        // 紀錄訊息
        this.carlist[car.num] = info;

    };
    out(car) {
        const info = this.carlist[car.num];
        // 把車位清空
        const place = info.place;
        place.out();
        // 顯示時間
        this.display.show(car, info.inTime);
        // 清空紀錄
        delete this.carlist[car.num];

    };
    emptyNum() {
        return this.floors.map(
            floor => {
                return `${floor.index}層還有${floor.emptyPlaceNum()}個位置`
            }).join('\n');
    }

}
// 攝影機
// 攝影機可以識別車牌還有時間
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now(),
        }
    }

}
// 顯示螢幕
// 顯示器顯示 車牌還有停車的全部時間
class Display {
    show(car, inTime) {
        console.log('車牌號', car.num);
        console.log('停車時間', Date.now() - inTime);
    }
}
// car
// num 表示為進入停車場時的車牌號碼
class Car {
    constructor(num) {
        this.num = num;
    }
}
// 層
class Floor {
    // index:表示為第幾層
    // places:表示為停車位
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }
    // 顯示當前這一層的空位數量
    emptyPlaceNum() {
        let num = 0;
        this.places.forEach(function (p) {
            if (p.empty) {
                num += 1;
            }
        })
        return num;
    };
}
// 車位
class Place {
    constructor() {
        this.empty = true;
    }
    in() {
        this.empty = false;
    }
    out() {
        this.empty = true;
    }
}

// test 
//  init parking
const floors = []
for (let i = 0; i < 3; i++) {
    const places = [];
    for (let j = 0; j < 100; j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i + 1, places);
}
const park = new Park(floors);

// init car
const car1 = new Car(10);
const car2 = new Car(200);
const car3 = new Car(300);
// 執行
console.log('第1輛車子進入');
console.log(park.emptyNum());
park.in(car1);
console.log('第2輛車子進入');
console.log(park.emptyNum());
park.in(car2);
console.log('第1輛車子離開');
park.out(car1);
