 /**
 * Determine whether the submitted string is a palindrome.
 *
 * Examples:
 * racecar (pass)
 * mom (pass)
 * tacocat (pass)
 * fizzbuzz (fail)
 *
 * @param {String} value
 * @return {Boolean}
 */
var isPalindrome = function(value) {
    var maximum = 0;
    maximum = value.length%2 == 0 ? (value.length/2)-1 : (value.length-1)/2
    for(let i = 0; i <= maximum; i++){
        if(value[i] !== value[value.length-i-1]) {
            return false;
        }
    }
    return true;
};