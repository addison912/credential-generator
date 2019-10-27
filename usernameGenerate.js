const words = require("./words");

// let quantity = prompt("How many emails should we generate");
// let quantity = 10;
// const fs = require("fs");

// (() => {
//   let emails = [];
//   for (let i = 0; i < quantity; i++) {
//     emails.push(generateUsername() + "@gmail.com");
//   }
//   console.log(emails);
// })();

function generateWord() {
  return words[Math.floor(Math.random() * words.length)];
}

module.exports = {
  gen: () => {
    let num = Math.floor(Math.random() * 10000);
    let username = generateWord() + "." + generateWord() + num;
    //   let email = username + "@gmail.com";
    return username;
  }
};
