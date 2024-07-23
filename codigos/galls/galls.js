function sum(start, end) {
    console.log(start + end);
    return (start + end) * (end + 1 - start) / 2;
}
console.log(sum(1, 100), '\n', sum(1, 1000));
