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

// Render Application notes
const renderNotes = function(notes, filters) {
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
