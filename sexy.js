console.log('note is also working');

//console.log(module);

const fs = require('fs');

var fetchingData = () => {
    try{
        var readingFile = fs.readFileSync('note_data.json');
        return JSON.parse(readingFile);
    }catch(e){
        return [];
        console.log('Json file is not created then what will it read stupid !');
    }
}

var saveData = (notes) => {
    fs.writeFileSync('note_data.json',JSON.stringify(notes));
}
var add = (title,body) => {
    var notes =fetchingData();
    var note = {
        title,
        body
    }
    notes.push(note);
    saveData(notes);
}

var remove = (title) => {
    var notes = fetchingData();
var filteredData = notes.filter((note) => {
    return note.title !== title;
});
saveData(filteredData);
}

var getAllData = () => {
    fetchingData();
}
module.exports = {
    add,
    remove
}