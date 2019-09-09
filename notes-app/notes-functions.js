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

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
	const noteEl = document.createElement('div');
	const textEl = document.createElement('span');
	const button = document.createElement('button');

	// Setup remove note Button
	button.textContent = 'X';

	// Setup note title text
	if (note.title.length > 0) {
		textEl.textContent = note.title;
	} else {
		textEl.textContent = 'Unnamed note';
	}
	noteEl.appendChild(button);
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
