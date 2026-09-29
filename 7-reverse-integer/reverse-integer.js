/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
};
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;

    let num = Math.abs(x);

    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    reversed = reversed * sign;

    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
        return 0;
    }

    return reversed;
};