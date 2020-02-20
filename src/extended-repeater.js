module.exports = function repeater( str, options ) {

    let arr1 = [];
    let arr2 = [];

    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    } 
    if (options.separator === undefined) {
        options.separator = "+";
    } 
    if (options.addition === undefined) {
        options.addition = "";
    } else if ( options.addition === null ) {
        options.addition = "null"
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    } 
    if (options.additionSeparator === undefined) {
        options.additionSeparator = "|";
    } 

    
    for ( let i = 0; i < options.additionRepeatTimes; i++) {
        arr1.push(options.addition);
    }
    
    let anotherAdition = arr1.join(options.additionSeparator);

    for ( let i = 0; i < options.repeatTimes; i++) {
        arr2.push(str + anotherAdition);
    }

    return arr2.join(options.separator);
};
  