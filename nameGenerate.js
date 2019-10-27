const first = require("./firstNames.json");
const last = require("./lastNames");

module.exports = {
  gen: () => {
    fName = first[Math.floor(Math.random() * first.length)];
    lName = last[Math.floor(Math.random() * last.length)];
    return { fName, lName };
  }
};
