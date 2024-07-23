function arimetic(a, start, size) {
    var sequenci = [start];
    for (var x = 1; x < size; x++) {
        sequenci.push(sequenci[sequenci.length - 1] + a);
    }
    return sequenci;
}
console.log(arimetic(3, 1, 100));
