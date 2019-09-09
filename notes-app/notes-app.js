const notes = getSavedNotes();

const filters = {
	searchText: '',
	filterBy: ''
};

renderNotes(notes, filters);

// Create notes
document.querySelector('#create-note').addEventListener('click', function(e) {
	notes.push({
		id: uuidv4(),
		title: '',
		body: ''
	});
	saveNotes(notes);
	renderNotes(notes, filters);
});

// Search filter Event Listener
document.querySelector('#search-text').addEventListener('input', (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

// Drop down sort
document.getElementById('filter-by').addEventListener('change', function(e) {
	filters.filterBy = e.target.value;
});

// -- Single target
// p
// #replace
// .item

// -- Multiple
// p#order
// button.inventory
// h1#title.application
// h1.application#title
