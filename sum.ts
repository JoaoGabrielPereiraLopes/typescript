function main(begin:number,end:number):number{
    let sum=0;
    for(let x=begin;x<=end;x++){
        sum+=x;
    }
    return sum;
}
console.log(main(0,5));