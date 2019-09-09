//Fetch existing todos from localStorage
const getSavedTodos = function() {
	const todosJSON = localStorage.getItem('todos');
	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	} else {
		return [];
	}
};

//Save todos to local storage
const saveTodos = function(todos) {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = function(todos, filters) {
	const filteredTodos = todos.filter((todo) => {
		const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
		const hideComletedMatch = !filters.hideCompleted || !todo.completed;
		return searchTextMatch && hideComletedMatch;
	});

	const incompleteTodos = filteredTodos.filter((todo) => {
		return !todo.completed;
	});

	document.getElementById('todo-container').innerHTML = '';

	document.getElementById('todo-container').appendChild(generateSummaryDOM(incompleteTodos));

	filteredTodos.forEach((todo) => {
		document.getElementById('todo-container').appendChild(generateTodoDOM(todo));
	});
};

// Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
	const todoEl = document.createElement('div');
	const checkbox = document.createElement('input');
	const todoText = document.createElement('span');
	const removeButton = document.createElement('button');

	// Setup Checkbox and remove buton
	checkbox.setAttribute('type', 'checkbox');
	removeButton.textContent = 'X';

	// Add text to span element
	if (todo.title.length > 0) {
		todoText.textContent = todo.title;
	} else {
		todoText.textContent = 'Unnamed todo';
	}

	// Append checkbox, span and button to the div
	todoEl.appendChild(checkbox);
	todoEl.appendChild(todoText);
	todoEl.appendChild(removeButton);
	return todoEl;
};

//Get the DOM elements for tlist summary
const generateSummaryDOM = function(incompleteTodos) {
	const summary = document.createElement('h3');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;
	return summary;
};
