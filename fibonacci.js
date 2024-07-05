function fibonacci(index) {
    var list = [0, 1];
    if (index == 1 || index == 0) {
        return index;
    }
    for (var x = 1; x < index; x++) {
        let old = list;
        list = [old[1], old[1] + old[0]];
        console.log(list)
    }
    return list[1];
}
console.log(fibonacci(4));