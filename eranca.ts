class retangle {
    private width: number;
    private height: number;
    public constructor(heigth: number, width: number) {
        this.width = width;
        this.height = heigth;
    }
    public area() {
        return this.width * this.height;
    }
    public perimert() {
        return (this.width + this.height) * 2;
    }
}
var figure1 = new retangle(2, 3);
console.log(figure1.area())
console.log(figure1.perimert())

class squre {
    private form: retangle;
    public constructor(side: number) {
        this.form = new retangle(side, side)
    }
    public area() {
        return this.form.area()
    }
    public permeter() {
        return this.form.perimert()
    }
}
var figure2 = new squre(1)
console.log(figure2.permeter())
console.log(figure2.area())