const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if ( !arguments.length) {
      this.arr.push("( )");
    } else {
    this.arr.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if ( typeof position !== "number" ||  position < 1 || position > this.arr.length || Math.round(position) !== position) {
      this.arr = [];
      throw new Error("error");
    } else {
      this.arr.splice(position - 1, 1);
    }  
      return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = chainMaker;
