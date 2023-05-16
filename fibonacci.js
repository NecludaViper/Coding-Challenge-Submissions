/**
 * Write a function that returns the first <i>n</i> numbers of the fibonacci sequence.
 *
 * Example: Given that total = 10, return the first 10 numbers of the fibonacci sequence.
 *
 * @see https://en.wikipedia.org/wiki/Fibonacci_number
 * @param {Number} total
 * @return {Array<Number>}
 */
var fibonacciSequence = function(total) {
    var sequence = [];
    var num = 1;
    var previousNum = 1;
    for(let i = 0; i < total; i++){
        sequence.push(num);
        num += previousNum;
        previousNum = sequence[i];
    }
    return sequence;
};