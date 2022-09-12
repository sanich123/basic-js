const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = " ") {
    if (typeof value === "function") {
      this.chain.push("( function () { } )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  finishChain() {
    const finished = this.chain.join("~~");
    this.chain = [];
    return finished;
  },
  removeLink(index) {
    if (
      !Number.isInteger(index) ||
      typeof index !== "number" ||
      index > this.chain.length - 1 ||
      index < 1
    ) {
        this.chain = [];
      throw new Error(`You can\'t remove incorrect link!`);
    } else {
      this.chain.splice(index - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
};

module.exports = {
  chainMaker,
};
