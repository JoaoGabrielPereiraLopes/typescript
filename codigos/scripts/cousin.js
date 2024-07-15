function main(Number) {
    var cousin = true; //this represent if the number is cousin
    for (var x = 2; Math.pow(x, 2) < Number; x++) {
        if (Number % x == 0) {
            cousin = false;
        }
    }
    return cousin;
}
console.log(main(2));
