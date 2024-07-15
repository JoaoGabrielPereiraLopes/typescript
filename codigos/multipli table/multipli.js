"use strict";
class table {
    constructor(base, end) {
        this.base = base;
        this.end = end;
        this.results = [];
        for (let x = 1; x <= end; x++) {
            this.results.push(x * base);
        }
    }
    exib() {
        for (let x = 1; x <= this.end; x++) {
            console.log(x, '*', this.base, '=', this.results[x - 1]);
        }
    }
    return() {
        return this.results;
    }
}
var variable = new table(1, 10);
variable.exib();
console.log(variable.return());
var variable = new table(2, 20);
variable.exib();
console.log(variable.return());
