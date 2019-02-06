console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var args = yargs.argv;
var command = args._[0];

if(command == "add"){
    notes.addNote(args.title,args.body);
}else if(command == "remove"){
    notes.removeNote(args.title);
}else if(command == "list"){
    notes.listNote();
}else{
    console.log('Command not recognized.')
}