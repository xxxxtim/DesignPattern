class ReadImg {
    constructor(fileName) {
        this.fileName = fileName;
    };
    disPlay() {
        console.log('disPlay.......' + this.fileName);
    };
    loadFromDisk() {
        console.log('loading .....' + this.fileName);
    };
};

class Proxy {
    constructor(fileName) {
        this.readImg = new ReadImg(fileName);
    };
    disPlay() {
        this.readImg.disPlay();
    };
};

// test 
let proxyimg = new Proxy('jing.png');
proxyimg.disPlay();