function getNoteId() {
    let getNotes = getExistingNotes();
    if(!getNotes) {
        return 1;
    }
    const keysArray = Object.keys(getNotes);
    const numberKeys = keysArray.map((key) => Number(key));
    return Math.max(...numberKeys) + 1;
}

function getExistingNotes(){
    let notes = localStorage.getItem('notes');
    if(!notes) {
        return null;
    }
    return JSON.parse(notes);
}