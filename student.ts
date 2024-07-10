class student{
    private grade:number[];
    private name:string;
    //in my scholl the average have diference weight in the 3 trimestrals in the first and second have 3 weigth and in the thrird'ts have 4
    public constructor(grade:number[],name:string){
        this.name=name;
        this.grade=grade;
    }
    public average(){
        return ((this.grade[0]+this.grade[1])*3+4*this.grade[2])/10;
    }
    public passad(){
        if (this.average()>=6){
            return true;
        }
        else{
            return false;
        }
    }
}
var estudante1=new student([6,6,6],'João Gabriel');
console.log(estudante1.passad());
console.log(estudante1.average());
var estudante2=new student([1,2,3],'BILL');
console.log(estudante2.passad());
console.log(estudante2.average())