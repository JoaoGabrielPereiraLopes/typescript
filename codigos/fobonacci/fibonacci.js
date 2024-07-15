"use strict";
function fibonacci(index) {
    let list = [0, 1];
    if (index == 1 || index == 0) {
        return index;
    }
    for (let x = 0; x < index; x++) {
        let old = list;
        list = [old[1], old[1] + old[0]];
    }
    return list[1];
}
console.log(fibonacci(4));
