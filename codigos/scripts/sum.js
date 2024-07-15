function main(begin, end) {
    var sum = 0;
    for (var x = begin; x <= end; x++) {
        sum += x;
    }
    return sum;
}
console.log(main(0, 5));
