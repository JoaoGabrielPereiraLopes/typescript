var retangle = /** @class */ (function () {
    function retangle(heigth, width) {
        this.width = width;
        this.height = heigth;
    }
    retangle.prototype.area = function () {
        return this.width * this.height;
    };
    retangle.prototype.perimert = function () {
        return (this.width + this.height) * 2;
    };
    return retangle;
}());
var figure1 = new retangle(2, 3);
console.log(figure1.area());
console.log(figure1.perimert());
var squre = /** @class */ (function () {
    function squre(side) {
        this.form = new retangle(side, side);
    }
    squre.prototype.area = function () {
        return this.form.area();
    };
    squre.prototype.permeter = function () {
        return this.form.perimert();
    };
    return squre;
}());
var figure2 = new squre(1);
console.log(figure2.permeter());
console.log(figure2.area());
