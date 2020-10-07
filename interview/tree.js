class Tree {
    constructor(length, width, ) {
        this.length = length;
        this.width = width;
    }
    triangle() {
        /* 
         *********
          *******
           *****
            ***
             *
                */
        let picture = '';
        for (let l = 0; l <= this.length - 1; l++) {
            for (let space = 0; space <= l; space++) {
                picture += " ";
            }
            for (let star = 0; star < this.width - l * 2; star++) {
                picture += '*'
            }
            picture += "\n";

        }
        console.log(picture);
    }
    triangle1() {
        /*
        *
        **
        ***
        ****
        *****
         */
        let picture1 = '';
        for (let l = 0; l < this.length; l++) {
            for (let star = 0; star <= l; star++) {
                picture1 += '*'
            }
            picture1 += "\n";
        }
        console.log(picture1)

    }
    triangle2() {
        let picture2 = '';
        for (let l = 0; l < this.length; l++) {
            for (let star = 0; star < this.width - l * 2; star++) {
                // console.log(this.width)
                picture2 += "*"
            }
            picture2 += "\n";
        }
        console.log(picture2)
    }
}




let tree = new Tree(5, 9);
// tree.triangle();
// tree.triangle1();
tree.triangle2()


