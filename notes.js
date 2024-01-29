// console.log("Notes Started");

// // console.log(module);

// module.exports.age = 29;

// //ex5
// // module.exports.addNote = function () {

// // };

// module.exports.addNote = () => {
//   console.log("Add Note Called");
//   return "New Note Created";
// };

// module.exports.add = (a, b) => {
//   console.log("Addition of Two Numbers");
//   return a + b;
// };

var createNote = (title, body) => {
  console.log("Note Created", title, body);
};

var getAllNotes = () => {
  console.log("get all notes");
};

var readNote = (title) => {
  console.log("Reading Note", title);
};

var removeNote = (title) => {
  console.log("Removing Note", title);
};

//exporting createNote
//creating obj
module.exports = {
  createNote,
  getAllNotes,
  readNote,
  removeNote,
};
