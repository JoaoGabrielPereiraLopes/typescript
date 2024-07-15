"use strict";
class retangle {
    constructor(heigth, width) {
        this.width = width;
        this.height = heigth;
    }
    area() {
        return this.width * this.height;
    }
    perimert() {
        return (this.width + this.height) * 2;
    }
}
var figure1 = new retangle(2, 3);
console.log(figure1.area());
console.log(figure1.perimert());
class squre {
    constructor(side) {
        this.form = new retangle(side, side);
    }
    area() {
        return this.form.area();
    }
    permeter() {
        return this.form.perimert();
    }
}
var figure2 = new squre(1);
console.log(figure2.permeter());
console.log(figure2.area());
