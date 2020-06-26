// state :紅燈 綠燈 黃燈
class State {
    constructor(color) {
        this.color = color;
    }
    handle() {
        console.log(`turn to ${this.color} light`);
        context.setState(this);
    }

}
// 主體
class Context {
    constructor() {
        this.state = null;
    }
    // 獲取狀態
    getState() {
        return this.state;
    }
    // 設定狀態
    setState(state) {
        this.state = state;
    }

}
// test
let context = new Context();

let green = new State('green')
let red = new State('red')
let yellow = new State('yellow')

// 綠燈亮了
green.handle(context)
console.log(context.getState());
// 黃燈亮了
yellow.handle(context)
console.log(context.getState());
// 紅燈亮了
red.handle(context)
console.log(context.getState());