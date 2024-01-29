console.log("Hello Node");
const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");
const yargs = require("yargs");

console.log("Process", process.argv);
console.log("Yargs", yargs.argv);

var argv = yargs.argv;
var command = argv._[0];

if (command === "list") {
  notes.getAllNotes();
  console.log("List all Notes");
} else if (command === "read") {
  notes.readNote(argv.title);
} else if (command === "create") {
  notes.createNote(argv.title, argv.body);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not Found");
}
