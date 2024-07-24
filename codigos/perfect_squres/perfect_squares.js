function squares(start, end) {
    var values = [];
    if (start < 0 || start > end) {
        throw Error("values incorrect");
    }
    for (; (Math.pow(start, 1) / 2) % 1 != 0; start++) { }
    for (var x = start; Math.pow(x, 2) < end; x++) {
        values.push(Math.pow(x, 2));
    }
    return values;
}
console.log(squares(-2, 100));
