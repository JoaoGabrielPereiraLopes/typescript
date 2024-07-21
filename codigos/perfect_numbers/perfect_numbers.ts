function divisor(limit:number):number[]{
    // the limit is the input of the funtion the limit represent a number to need to return the divisors count
    let divisors:number[]=[];
    for(let x=1;x<=limit/2;x++){
        if(limit%x===0){
            divisors.push(x);
        }
    }
    return divisors;
}
function value(a:number[]):number{
    let sum=0
    for(let x=0;x<a.length;x++){
        sum+=a[x]
    }
    return sum
}
function perfect_number(check:number):boolean{//the check parameters is the number, to we wil go to test, if is perfect number
    let divisors=divisor(check);
    let sum=value(divisors); //the sum is the sum of the divisor of the check
    return sum==check
}
console.log(perfect_number(28))
console.log(perfect_number(6))
console.log(perfect_number(12))
console.log(perfect_number(496))
console.log(perfect_number(8128))
console.log(perfect_number(100))