const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function() {
  let total = 0;
	let args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        total += args[i][j];
      }
    }
    else {
      total += args[i];
    }
  }
  return total;
};

const multiply = function() {
  let total = 0;
  let args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        if (i == 0 && j == 0) {
          total = args[i][j];
        }
        else {
          total *= args[i][j];
        }
      }
    }
    else {
      if (i == 0) {
        total = args[i]
      }
      else {
        total *= args[i];
      }
    }
  }
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let result = 1;
  if (num == 0) {
    return result;
  }

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
