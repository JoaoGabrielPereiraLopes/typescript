"use strict";
function count(a, s) {
    let contagem = 0;
    for (let x = 0; x < a.length; x++) {
        if (a[x] == s) {
            contagem += 1;
        }
    }
    return contagem;
}
function main(a, b) {
    for (let x = 0; x < a.length; x++) {
        if (count(b, a[x]) !== count(a, a[x])) {
            return false;
        }
    }
    return true;
}
console.log(main('123', '321'));
