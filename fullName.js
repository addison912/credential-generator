const name = require("./nameGenerate");
(() => {
  let newName = name.gen();
  `${newName.fName} ${newName.lName}`;
  console.log(`${newName.fName} ${newName.lName}`);
})();
