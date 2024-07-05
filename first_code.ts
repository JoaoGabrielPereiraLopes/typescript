function testa(a:number[]):boolean{
    return a.length==0
}

//console.log(testa([1,2,3]))

interface retancle {
    width: number;
    heigth: number;
}

const inteface:retancle = {
    width:20,
    heigth:10
};

console.log(inteface)

var l:[number,boolean,string]
l=[3,true,' ']
console.log(l);

function media(a:number[]):number{
    let soma=0
    for(let x=0;x<a.length;x++){
        soma+=a[x];
    }
    return soma/a.length
}
console.log(media([1,3,3]))