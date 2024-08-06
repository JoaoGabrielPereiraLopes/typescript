function main(c:number,a:number,n:number){
    let index=c
    let elements=[c]
    for(let x=2;x<n;x++){
        elements.push((a**(x-1))*c)
    }
    return elements
}
console.log(main(1,1/2,10))