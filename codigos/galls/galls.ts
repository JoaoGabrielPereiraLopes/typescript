function sum(start:number,end:number):number{
    return (start+end)*(end+1-start)/2
}
console.log(sum(1,100),'\n',
sum(1,1000))