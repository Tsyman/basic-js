const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   if (typeof sampleActivity !== 'string') {
    return false;
  }

  let num = parseFloat(sampleActivity);

  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || !num) {
    return false;
  }
  
  let diffActivity =  MODERN_ACTIVITY / num;
  let rateConst = 0.693 / HALF_LIFE_PERIOD;
  let ln = Math.log(diffActivity);
  let age = Math.ceil(ln / rateConst);
  return age;
};
