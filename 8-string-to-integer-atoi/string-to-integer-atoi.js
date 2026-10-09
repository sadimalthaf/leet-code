/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
};
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;

    // Skip spaces
    while (s[i] === " ") {
        i++;
    }

    // Check sign
    if (s[i] === "-") {
        sign = -1;
        i++;
    } else if (s[i] === "+") {
        i++;
    }

    // Read digits
    while (s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + Number(s[i]);
        i++;
    }

    num = num * sign;

    // Limit to 32-bit signed integer
    if (num < -2147483648) return -2147483648;
    if (num > 2147483647) return 2147483647;

    return num;
};