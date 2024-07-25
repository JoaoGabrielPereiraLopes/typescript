function triangle(coeficiente:number,limite:number):number[]{
    let sequenci:number[]=[1]
    for(let x=coeficiente+1;sequenci.length<=limite;x+=coeficiente){
        sequenci.push(sequenci[sequenci.length-1]+x)
    }
    return (sequenci)
}
console.log(triangle(1,10))
console.log(triangle(2,20))
console.log(triangle(3,30))
console.log(triangle(4,40))
console.log(triangle(5,50))