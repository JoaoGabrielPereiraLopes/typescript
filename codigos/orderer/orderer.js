function oderer(a) {
    var oderer_a = [];
    for (; a.length > 0;) {
        var max = Math.max.apply(Math, a);
        oderer_a.push(max);
        a.splice(a.indexOf(max), 1);
    }
    return oderer_a.reverse();
}
console.log(oderer([1, 2, 3, 5, 7, 6, 9, 8, 10]));
