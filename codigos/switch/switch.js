function swap(a, b) {
    a = a + b;
    b = a.split(a[a.length - b.length])[0];
    a = a.split(b)[1];
    return [a, b];
}
console.log(swap('1', '2'));
console.log(swap('nice', 'good'));
console.log(swap('Moises', 'Zaza'));
