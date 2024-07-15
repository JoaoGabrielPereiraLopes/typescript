"use strict";
function main(Number) {
    let cousin = true; //this represent if the number is cousin
    for (let x = 2; x ** 2 < Number; x++) {
        if (Number % x == 0) {
            cousin = false;
        }
    }
    return cousin;
}
console.log(main(2));
