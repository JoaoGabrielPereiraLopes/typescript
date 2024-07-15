var table = /** @class */ (function () {
    function table(base, end) {
        this.base = base;
        this.end = end;
        this.results = [];
        for (var x = 1; x <= end; x++) {
            this.results.push(x * base);
        }
    }
    table.prototype.exib = function () {
        for (var x = 1; x <= this.end; x++) {
            console.log(x, '*', this.base, '=', this.results[x - 1]);
        }
    };
    table.prototype.return = function () {
        return this.results;
    };
    return table;
}());
var variable = new table(1, 10);
variable.exib();
console.log(variable.return());
var variable = new table(2, 20);
variable.exib();
console.log(variable.return());