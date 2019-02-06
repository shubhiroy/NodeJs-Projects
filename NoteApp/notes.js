console.log('Starting note.js');

var addNote = (title,body) => {
    console.log(`Adding ${title} ${body}`);
};

var listNote = () => {
    console.log('Listing all notes.')
};

var removeNote = (title) => {
    console.log(`Removing ${title}.`)
};

module.exports = {
    addNote,
    listNote,
    removeNote
}