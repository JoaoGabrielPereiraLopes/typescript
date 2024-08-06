function main(c, a, n) {
    var index = c;
    var elements = [c];
    for (var x = 2; x < n; x++) {
        elements.push((Math.pow(a, (x - 1))) * c);
    }
    return elements;
}
console.log(main(1, 1 / 2, 10));
