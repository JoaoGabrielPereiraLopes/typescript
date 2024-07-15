function count(a, s) {
    var contagem = 0;
    for (var x = 0; x < a.length; x++) {
        if (a[x] == s) {
            contagem += 1;
        }
    }
    return contagem;
}
function mean(a) {
    var soma = 0;
    for (var x = 0; x < a.length; x++) {
        soma += a[x];
    }
    return soma / a.length;
}
function median(a) {
    a = a.sort();
    if (a.length % 2 == 0) {
        return (a[a.length / 2 - 1] + a[(a.length / 2)]) / 2;
    }
    else {
        return a[(a.length - a.length % 2) / 2];
    }
}
function mode(a) {
    var amount = 0;
    for (var x = 0; x < a.length; x++) {
        if (count(a, amount) < count(a, a[x])) {
            amount = x;
        }
    }
    return amount;
}
console.log(mode([1,1,1,1,1,1,1,2]));
console.log(median([1,2,3]));
console.log(mean([1,2,3]));