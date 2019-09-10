let notes = getSavedNotes();

const filters = {
	searchText: '',
	filterBy: ''
};

renderNotes(notes, filters);

// Create notes
document.querySelector('#create-note').addEventListener('click', function(e) {
	const newNote = {
		id: uuidv4(),
		title: '',
		body: ''
	};
	notes.push(newNote);
	saveNotes(notes);
	location.assign(`./edit.html#${newNote.id}`);
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

// Event listener to the window object
window.addEventListener('storage', function(e) {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		renderNotes(notes, filters);
	}
});

// Unix Epoch - January 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();
const myDate = new Date(timestamp);

const dateOne = new Date('October 18 1977 9:50:00');
const stampOne = dateOne.getTime();
const dateTwo = new Date('March 12 1984 03:33:21');
const stampTwo = dateTwo.getTime();
const first = function(x, y) {
	let b = 0;
	x < y ? (b = x) : (b = y);
	let myDate = new Date(b);
	console.log(myDate.toString());
};
first(firstStamp, seconStamp);

// -- Single target
// p
// #replace
// .item

// -- Multiple
// p#order
// button.inventory
// h1#title.application
// h1.application#title
