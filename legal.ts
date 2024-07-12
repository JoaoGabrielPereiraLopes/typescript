class circle{
    private radio:number
    private pi:number
    public constructor(radio:number){
        this.radio=radio;
        this.pi=3.141592653589793238462643383279502
    }
    public area(){
        return (this.radio**2)*this.pi;
    }
    public perimeter(){
        return this.radio*this.pi*2
    }
}
var figure=new circle(1);
console.log(figure.perimeter(),figure.area())

class retangle{
    private width:number;
    private heigth:number;
    public constructor(width:number,heigth:number){
        this.width=width;
        this.heigth=heigth;
    }
    public area(){
        return this.width*this.heigth;
    }
    public perimeter(){
        return(this.width+this.heigth)*2;
    }
}
var figure1=new retangle(2,2);
console.log(figure1.area(),figure1.perimeter())

class square{
    private side:number;
    public constructor(side:number){
        this.side=side;
    }
    public area(){
        return this.side**2;
    }
    public perimeter(){
        return this.side*4;
    }
}
var figure2=new square(3)
console.log(figure2.area(),figure2.perimeter())