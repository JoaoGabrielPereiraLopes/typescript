function main(months, rate, money, payment) {
    for (var x = 0; x < months; x++) {
        money *= 1 + rate / 100;
        money += payment;
    }
    return money;
}
console.log(main(10, 25, 1000, 0));