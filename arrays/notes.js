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

// notes.pop();
// notes.push('My new note');

// console.log(notes.shift());
// notes.unshift('my first note');

// notes.forEach(function(el) {
// 	console.log(el);
// });

// notes.splice(1, 1, 'in place of note 2');
// console.log(notes);
const sortNotes = function(notes) {
	notes.sort(function(a, b) {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1;
		} else if (b.title.toLowerCase() < a.title.toLowerCase()) {
			return 1;
		} else {
			return 0;
		}
	});
};

const findNote = function(notes, noteTitle) {
	return notes.find((note, index) => {
		return note.title.toLowerCase() === noteTitle.toLowerCase();
	});
};

const findNotes = (notes, query) => {
	return notes.filter((note, index) => {
		const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
		const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase());
		return isTitleMatch || isBodyMatch;
	});
};
// console.log(findNotes(notes, 'wish'));
// const findNote = function(notes, noteTitle) {
// 	const index = notes.findIndex((note, index) => {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase();
// 	});
// 	return notes[index];
// };
// const note = findNote(notes, 'Habbits to work on');
// console.log(note);

// const index = notes.findIndex(function(note, index) {
// 	console.log(note);
// 	console.log(index);
// 	return note.title === 'Wish List';
// });
// console.log(index);
sortNotes(notes);
console.log(notes);
