'use strict';
import { createNote } from './notes';
import { setFilters } from './filters';
import { renderNotes } from './views';

renderNotes();

// Create notes
document.querySelector('#create-note').addEventListener('click', (e) => {
	const id = createNote();
	location.assign(`./edit.html#${id}`);
});

// Search filter Event Listener
document.querySelector('#search-text').addEventListener('input', (e) => {
	setFilters({
		searchText: e.target.value
	});
	renderNotes();
});

// Drop down sort
document.getElementById('filter-by').addEventListener('change', (e) => {
	setFilters({
		sortBy: e.target.value
	});
	renderNotes();
});

// Event listener to the window object
window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		renderNotes();
	}
});
