function main(a) {
    for (var x = 0; x < a.length; x++) {
        if (a[x] != a[a.length - x - 1]) {
            return false;
        }
    }
    return true;
}
console.log(main('123'));
console.log(main('121'));
