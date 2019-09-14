const titleElement = document.getElementById('note-title');
const bodyElement = document.getElementById('note-body');
const removeElement = document.getElementById('remove-note');
const noteId = location.hash.substring(1);
const dateElement = document.getElementById('last-edited');
let notes = getSavedNotes();

let note = notes.find(function(note) {
	return note.id === noteId;
});

if (note === undefined) {
	location.assign('./index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

// Setup input event for title
titleElement.addEventListener('input', function(e) {
	note.title = e.target.value;
	note.updatedAt = moment().valueOf();
	dateElement.textContent = generateLastEdited(note.updatedAt);
	saveNotes(notes);
});

// Setup input event for body
bodyElement.addEventListener('input', function(e) {
	note.body = e.target.value;
	note.updatedAt = moment().valueOf();
	dateElement.textContent = generateLastEdited(note.updatedAt);

	saveNotes(notes);
});

// Remove button that removes noetes and redirecs back
removeElement.addEventListener('click', function(noteId) {
	removeNote(note.id);
	saveNotes(notes);
	location.assign('./index.html');
});

// Event listener to the window

window.addEventListener('storage', function(e) {
	if (e.key === 'notes') {
		JSON.parse(e.newValue);
		note = notes.find(function(note) {
			return note.id === noteId;
		});

		if (note === undefined) {
			location.assign('./index.html');
		}

		titleElement.value = note.title;
		bodyElement.value = note.body;
		dateElement.textContent = generateLastEdited(note.updatedAt);
	}
});
