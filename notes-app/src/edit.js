'use strict';
import { initializeEditPage, generateLastEdited } from './views';
import { updateNote, removeNote } from './notes';

const titleElement = document.getElementById('note-title');
const bodyElement = document.getElementById('note-body');
const removeElement = document.getElementById('remove-note');
const noteId = location.hash.substring(1);
const dateElement = document.getElementById('last-edited');

initializeEditPage(noteId);

// Setup input event for title
titleElement.addEventListener('input', (e) => {
	const note = updateNote(noteId, {
		title: e.target.value
	});
	dateElement.textContent = generateLastEdited(note.updatedAt);
});

// Setup input event for body
bodyElement.addEventListener('input', (e) => {
	const note = updateNote(noteId, {
		body: e.target.value
	});
	dateElement.textContent = generateLastEdited(note.updatedAt);
});

// Remove button that removes noetes and redirecs back
removeElement.addEventListener('click', (e) => {
	removeNote(noteId);
	location.assign('./index.html');
});

// Event listener to the window

window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		initializeEditPage(noteId);
	}
});
