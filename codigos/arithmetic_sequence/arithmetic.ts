function arimetic(a:number,start:number,size:number):number[]{
    let sequenci:number[]=[start]
    for(let x:number=1;x<size;x++){
        sequenci.push(sequenci[sequenci.length-1]+a)
    }
    return sequenci
}
console.log(arimetic(3,1,100))