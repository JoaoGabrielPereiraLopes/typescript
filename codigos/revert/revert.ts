function revert(a:number):number{
    let b=String(a);
    let c='';
    for(let x=b.length-1;x>=0;x--){
        c+=b[x];
    }
    return Number(c);
}