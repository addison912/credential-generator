const fs = require("fs");

const pw = require("./passwordGenerate");
const uid = require("./usernameGenerate");
const name = require("./nameGenerate");
const bday = require("./birthDateGenerator");

let quantity = 10;
let credentials = [];

for (let i = 0; i < quantity; i++) {
  let names = name.gen();

  let dob = bday.gen();
  dob = `${dob.month}-${dob.day}-${dob.year}`;

  const user = {
    uid: uid.gen(),
    pw: pw.gen(),
    first: names.fName,
    last: names.lName,
    dob
  };
  credentials.push(user);
}

fs.writeFile("credentials.json", JSON.stringify(credentials), err => {
  if (err) throw err;
  console.log("The file has created!");
});
