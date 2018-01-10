console.log('hi working');

const fs = require('fs');
const yargs = require('yargs');

const note = require('./sexy.js');

var command = yargs.argv._[0];

if(command == 'add'){
    note.add(yargs.argv.title,yargs.argv.body);
    console.log('add working');
}else if (command === 'remove'){
    note.remove(yargs.argv.title);
    console.log('remove working');
}else if (command === 'getAll'){
    console.log('getAll working');
}
