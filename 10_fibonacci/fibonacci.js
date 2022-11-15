const fibonacci = function(num) {
    num = parseInt(num, 10);
    if (num < 0) {
        return 'OOPS';
    }
    if (num == 1) {
        return num;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
