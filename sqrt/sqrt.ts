function sqrt(a:number):string{
    let imaginari=a<0
    if(a==0){
        return '0'
    }
    if(imaginari){
        a*=-1
    }
    for(var x=0;a!=x**2;x++){
    }
    if(imaginari){
        return String(x)+'I'
    }
    else{
        return String(x)
    }
}
console.log(sqrt(-1000000000000),'\n'+sqrt(-9))