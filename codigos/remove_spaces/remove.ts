function remover(a:string):string{
    let text_without_spaces=''
    for(let x=0;x<a.length;x++){
        if(a[x]!=' '){
            text_without_spaces+=a[x]
        }
    }
    return text_without_spaces
}
console.log(remover('t h i s a t e xt'))//return thisatext