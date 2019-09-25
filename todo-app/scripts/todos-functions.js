'use strict';

//Fetch existing todos from localStorage
const getSavedTodos = () => {
	const todosJSON = localStorage.getItem('todos');

	try {
		return todosJSON ? JSON.parse(todosJSON) : [];
	} catch (e) {
		return [];
	}
};

//Save todos to local storage
const saveTodos = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodo = (todoId) => {
	const todoIndex = todos.findIndex((todo) => todo.id === todoId);
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}
};

// Toggle Completed on/off
const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id);
	if (todo) {
		todo.completed = !todo.completed;
	}
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
	const filteredTodos = todos.filter((todo) => {
		const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
		const hideComletedMatch = !filters.hideCompleted || !todo.completed;
		return searchTextMatch && hideComletedMatch;
	});

	const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
	const todoEl = document.getElementById('todo-container');
	todoEl.innerHTML = '';
	todoEl.appendChild(generateSummaryDOM(incompleteTodos));

	if (filteredTodos.length > 0) {
		filteredTodos.forEach((todo) => {
			todoEl.appendChild(generateTodoDOM(todo));
		});
	} else {
		const messageEl = document.createElement('p');
		messageEl.classList.add('empty-message');
		messageEl.textContent = 'No to-does to show!';
		todoEl.appendChild(messageEl);
	}
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
	const todoEl = document.createElement('label');
	const containerEl = document.createElement('div');
	const checkbox = document.createElement('input');
	const todoText = document.createElement('span');
	const removeButton = document.createElement('button');

	// Setup Checkbox and remove buton
	checkbox.setAttribute('type', 'checkbox');
	checkbox.checked = todo.completed;
	containerEl.appendChild(checkbox);
	checkbox.addEventListener('click', () => {
		toggleTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	});

	// Setup the todo text
	if (todo.title.length) {
		todoText.textContent = todo.title;
	} else {
		todoText.textContent = 'Unnamed todo';
	}
	containerEl.appendChild(todoText);

	// Setup container
	todoEl.classList.add('list-item');
	containerEl.classList.add('list-item__container');
	todoEl.appendChild(containerEl);

	//Setup the remove button
	removeButton.textContent = 'remove';
	removeButton.classList.add('button', 'button--text');
	todoEl.appendChild(removeButton);

	removeButton.addEventListener('click', () => {
		removeTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	});

	return todoEl;
};

//Get the DOM elements for tlist summary
const generateSummaryDOM = (incompleteTodos) => {
	const summary = document.createElement('h3');
	summary.classList.add('list-title');
	if (incompleteTodos.length !== 1) {
		summary.textContent = `You have ${incompleteTodos.length} todos left`;
	} else {
		summary.textContent = `You have ${incompleteTodos.length} todo left`;
	}
	return summary;
};
