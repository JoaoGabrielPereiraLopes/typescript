function main(months:number,rate:number,money:number,payment:number):number{
    for(let x=0;x<months;x++){
        money*=1+rate/100;
        money+=payment
    }
    return money;
}
console.log(main(10,25,1000,0));