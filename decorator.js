class Circle {
    draw() {
        console.log('畫一個圓圈');
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }
    // draw（） 引進了原本circle的原本功能 以及setRedBorder的功能
    draw() {
        this.circle.draw();
        this.setRedBorder(circle);
    }
    setRedBorder(circle) {
        console.log('設定紅色框框')
    }
}

// test
let circle = new Circle();
circle.draw();

let dec = new Decorator(circle)
dec.draw();