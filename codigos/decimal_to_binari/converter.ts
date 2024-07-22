function converter(decimal:number):string{//this function convert decimal in binari 
    let binari=''
    for(;decimal!=1;){
        binari+=String(decimal%2)
        decimal=(decimal-decimal%2)/2
    }
    return (binari+'1').split('').reverse().join('')
}
console.log(converter(2),converter(1),converter(25))