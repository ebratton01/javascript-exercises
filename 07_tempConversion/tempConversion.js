const ftoc = function(farenheit) {
  let temp = (farenheit - 32) * (5/9);
  let celsius = Math.round(temp*10)/10;
  return celsius;
};

const ctof = function(celsius) {
  let temp = (celsius * (9/5) + 32);
  let farenheit = Math.round(temp* 10)/10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
