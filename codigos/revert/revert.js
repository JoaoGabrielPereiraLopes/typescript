function revert(a) {
    var b = String(a);
    var c = '';
    for (var x = b.length - 1; x >= 0; x--) {
        c += b[x];
    }
    return Number(c);
}