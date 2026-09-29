/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
};var isPalindrome = function(x) {
    let original = x;
    let reversed = 0;

    if (x < 0) {
        return false;
    }

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};