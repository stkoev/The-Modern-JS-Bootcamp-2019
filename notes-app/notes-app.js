const notes = [
	{
		title: 'My next trip',
		body: 'I would like to go hiking in the mountains'
	},
	{
		title: 'Habbits to work on',
		body: 'Excercise, Eat healthy'
	},
	{
		title: 'Wish List',
		body: 'wishes to become goals'
	},
	{
		title: 'Exercise wish',
		body: 'something to try'
	}
];

const filters = {
	searchText: ''
};

const renderNotes = function(notes, filters) {
	const filteredNotes = notes.filter(function(note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	//clear the DIV for the filtered notes
	document.querySelector('#notes').innerHTML = '';

	//add filteed notes
	filteredNotes.forEach(function(note) {
		const noteEl = document.createElement('p');
		noteEl.textContent = note.title;
		document.querySelector('#notes').appendChild(noteEl);
	});
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
	console.log(e);
});

// Search filter Event Listener
document.querySelector('#search-text').addEventListener('input', (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters).forEach((note) => {
		const newParagraph = document.createElement('p');
		newParagraph.textContent = note.title;
		document.querySelector('body').appendChild(newParagraph);
	});
});

// Checkbox event listener
document.getElementById('for-fun').addEventListener('change', function(e) {
	const forFun = e.target.checked;
	console.log(forFun);
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
