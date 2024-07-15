"use strict";
function testa(a) {
    return a.length == 0;
}
const inteface = {
    width: 20,
    heigth: 10
};
console.log(inteface);
var l;
l = [3, true, ' '];
console.log(l);
function media(a) {
    let soma = 0;
    for (let x = 0; x < a.length; x++) {
        soma += a[x];
    }
    return soma / a.length;
}
console.log(media([1, 3, 3]));
