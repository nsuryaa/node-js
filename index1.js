console.log("Hello Node");
//file system - fs
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");

var filteredArray = _.uniq(["Surya Nantha", 1, 2, "Surya", 345, 345, 1]);
console.log(filteredArray);

console.log(_.isString("abc"));
console.log(_.isString(2));

var res = notes.addNote();
console.log(res);

var result = notes.add(9, -2);
console.log(result);

var user = os.userInfo();
console.log(user.username);

fs.appendFile(
  "message.txt",
  `Hello ${user.username}, You are ${notes.age} years old.`,
  (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data has been appended to message.txt");
    }
  }
);
