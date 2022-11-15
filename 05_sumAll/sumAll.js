const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    else if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR'
    }
    else {
        if (num1 > num2) {
            let hold = num2;
            num2 = num1;
            num1 = hold; 
        }
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
