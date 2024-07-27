function invert(a:string):string{
    let result=''
    for(let x=a.length-1;x>=0;x--){
        result+=a[x]
    }
    return result
}
console.log(invert('BR'))//RB
console.log(invert('USA'))//ASU
console.log(invert('CD'))//DC
console.log(invert('Intel'))//letnI