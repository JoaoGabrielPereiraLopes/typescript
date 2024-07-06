function count(a, s) {
    var contagem = 0;
    for (var x = 0; x < a.length; x++) {
        if (a[x] == s) {
            contagem += 1;
        }
    }
    return contagem;
}
function main(a, b) {
    for (var x = 0; x < a.length; x++) {
        if (count(b, a[x]) !== count(a, a[x])) {
            return false;
        }
    }
    return true;
}
console.log(main('123', '321'));
