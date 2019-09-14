// Read existing notes from local storage
const getSavedNotes = function() {
	const notesJSON = localStorage.getItem('notes');
	if (notesJSON !== null) {
		return JSON.parse(notesJSON);
	} else {
		return [];
	}
};

// Save the notes to localstorage
const saveNotes = function(notes) {
	localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a note from the list
const removeNote = function(id) {
	const noteIndex = notes.findIndex((note) => {
		return note.id === id;
	});
	if (noteIndex > -1) {
		notes.splice(noteIndex, 1);
	}
};

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
	const noteEl = document.createElement('div');
	const textEl = document.createElement('a');
	const button = document.createElement('button');

	// Setup remove note Button
	button.textContent = 'X';
	noteEl.appendChild(button);
	button.addEventListener('click', function() {
		removeNote(note.id);
		saveNotes(notes);
		renderNotes(notes, filters);
	});

	// Setup note title text
	if (note.title.length > 0) {
		textEl.textContent = note.title;
	} else {
		textEl.textContent = 'Unnamed note';
	}
	textEl.href = `./edit.html#${note.id}`;

	noteEl.appendChild(textEl);

	return noteEl;
};

// Sort notes by one of three ways
const sortNotes = function(notes, sortBy) {
	if (sortBy === 'byEdited') {
		return notes.sort(function(a, b) {
			if (a.updatedAt > b.updatedAt) {
				return -1;
			} else if (a.updatedAt < b.updatedAt) {
				return 1;
			} else {
				return 0;
			}
		});
	} else if (sortBy === 'byCreated') {
		return notes.sort(function(a, b) {
			if (a.createdAt > b.createdAt) {
				return -1;
			} else if (a.createdAt < b.createdAt) {
				return 1;
			} else {
				return 0;
			}
		});
	} else if (sortBy === 'alphabetical') {
		return notes.sort(function(a, b) {
			if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return -1;
			} else if (a.title.toLowerCase() > b.title.toLowerCase()) {
				return 1;
			} else {
				return 0;
			}
		});
	} else {
		return notes;
	}
};

// Render Application notes
const renderNotes = function(notes, filters) {
	notes = sortNotes(notes, filters.sortBy);
	const filteredNotes = notes.filter(function(note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	//clear the DIV for the filtered notes
	document.querySelector('#notes').innerHTML = '';

	//add filteed notes
	filteredNotes.forEach(function(note) {
		const noteEl = generateNoteDOM(note);
		document.querySelector('#notes').appendChild(noteEl);
	});
};

// Generate last edited message
const generateLastEdited = function(timestamp) {
	return `Last edited: ${moment(timestamp).fromNow()}`;
};
