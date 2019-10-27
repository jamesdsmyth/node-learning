var fs = require('fs');
 var yargs = require('yargs');

 var notes = require('./notes');

// adding a note.
// command is 'add' and we accept the title and body. Both are mandatory (demandOption);
// we then call the handler function which is addNote() in this case.
yargs.command({
  command: 'add',
  description: 'add a new note',
  builder: {
    title: {
      description: 'note title value',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'note body value',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  description: 'remove a note',
  builder: {
    title: {
      description: 'note title value',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
});

yargs.command({
  command: 'read', 
  description: 'read a note',
  handler: (argv) => {
    notes.readNote(argv.title)
  }
});

yargs.command({
  command: 'list',
  description: 'list a note',
  handler: () => {
    notes.listNotes();
  }
});

yargs.parse();