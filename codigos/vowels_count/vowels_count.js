function count(a, b) {
    var cauntage = 0; // this is the number to represent how many a have in b
    for (var x = 0; x < b.length; x++) {
        if (b[x] === a) {
            cauntage++;
        }
    }
    return cauntage;
}
function vowels_count(a) {
    return count('a', a) + count('e', a) + count('i', a) + count('o', a) + count('u', a); //in this line I aply the count functio to all vowels
}
console.log(vowels_count('netherlands'));
