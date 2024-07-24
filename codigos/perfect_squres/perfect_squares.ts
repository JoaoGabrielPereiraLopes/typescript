function squares(start:number,end:number):number[]{
    let values:number[]=[]
    if(start<0||start>end){
        throw Error("values incorrect");
    }
    for(;(start**1/2)%1!=0;start++){}
    for(let x=start;x**2<end;x++){
        values.push(x**2)
    }
    return values
}
console.log(squares(2,100))