class table{
    end:number;
    results:number[];
    base:number;
    public constructor(base:number,end:number){
        this.base=base;
        this.end=end;
        this.results=[];
        for(let x=1;x<=end;x++){
            this.results.push(x*base);
        }
    }
    public exib(){
        for(let x=1;x<=this.end;x++){
            console.log(x,'*',this.base,'=',this.results[x-1]);
        }
    }
    public return(){
        return this.results;
    }
}
var variable=new table(1,10);
variable.exib();
console.log(variable.return());
var variable=new table(2,20);
variable.exib();
console.log(variable.return());