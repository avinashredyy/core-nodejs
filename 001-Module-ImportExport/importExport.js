const sum = (num1, num2) => {
  return num1 + num2;
};

const piValue = 3.14;

//To export only one specific function/variable
// module.exports = sum;

//One way to export all function/variable
// module.exports.sum = sum;
// module.exports.piValue = piValue;

//Another way to export all function/variable
module.exports = { sum, piValue };
