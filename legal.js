var circle = /** @class */ (function () {
    function circle(radio) {
        this.radio = radio;
        this.pi = 3.141592653589793238462643383279502;
    }
    circle.prototype.area = function () {
        return (Math.pow(this.radio, 2)) * this.pi;
    };
    circle.prototype.perimeter = function () {
        return this.radio * this.pi * 2;
    };
    return circle;
}());
var figure = new circle(1);
console.log(figure.perimeter(), figure.area());
var retangle = /** @class */ (function () {
    function retangle(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    retangle.prototype.area = function () {
        return this.width * this.heigth;
    };
    retangle.prototype.perimeter = function () {
        return (this.width + this.heigth) * 2;
    };
    return retangle;
}());
var figure1 = new retangle(2, 2);
console.log(figure1.area(), figure1.perimeter());
var square = /** @class */ (function () {
    function square(side) {
        this.side = side;
    }
    square.prototype.area = function () {
        return Math.pow(this.side, 2);
    };
    square.prototype.perimeter = function () {
        return this.side * 4;
    };
    return square;
}());
var figure2 = new square(3);
console.log(figure2.area(), figure2.perimeter());
