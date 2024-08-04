/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
