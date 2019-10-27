const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  debugger;

  const duplicate = notes.find(item => title === item.title);

  if(!duplicate) {
    notes.push({
      title,
      body
    }); 
  
    saveNotes(notes);
    console.log('note added!');
  } else {
    console.log('this is a duplicate');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter(item => title !== item.title);

  if(notes.length > updatedNotes.length) {
    console.log(chalk.green.inverse(`we remove the note with title ${title}!`));
  } else {
    console.log(chalk.red.inverse('not note found!'));
  }

  saveNotes(updatedNotes); 
}

const listNotes = () => {
  const notes = loadNotes();
  const notesJson = JSON.stringify(notes);

  console.log(chalk.yellow.inverse(notesJson));
}

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find(item => title === item.title);

  if(note) {
    console.log(chalk.green.inverse(`note title is ${note.title} and the body is ${note.body}`));
  } else {
    console.log(`no note exists with the title of ${title}`);
  }
}

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {

  try {
    const data = fs.readFileSync('notes.json');
    const dataJson = data.toString();
    return JSON.parse(dataJson);
  } catch(error) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};