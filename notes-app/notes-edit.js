const titleElement = document.getElementById('note-title');
const bodyElement = document.getElementById('note-body');
const removeElement = document.getElementById('remove-note');
const noteId = location.hash.substring(1);
const notes = getSavedNotes();

const note = notes.find(function(note) {
	return note.id === noteId;
});

if (note === undefined) {
	location.assign('./index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

// Setup input event for title
titleElement.addEventListener('input', function(e) {
	note.title = e.target.value;
	saveNotes(notes);
});

// Setup input event for body
bodyElement.addEventListener('input', function(e) {
	note.body = e.target.value;
	saveNotes(notes);
});

// Remove button that removes noetes and redirecs back
removeElement.addEventListener('click', function(noteId) {
	removeNote(note.id);
	saveNotes(notes);
	location.assign('./index.html');
});
