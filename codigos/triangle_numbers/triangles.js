function triangle(coeficiente, limite) {
    var sequenci = [1];
    for (var x = coeficiente + 1; sequenci.length <= limite; x += coeficiente) {
        sequenci.push(sequenci[sequenci.length - 1] + x);
    }
    return (sequenci);
}
console.log(triangle(1, 100));
console.log(triangle(10, 100));
