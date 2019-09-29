import { getTodos, saveTodos, removeTodo, toggleTodo } from './todos';
import { getFilters } from './filters';

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
	const filters = getFilters();
	const todos = getTodos();
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

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
		renderTodos();
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
		renderTodos();
	});

	return todoEl;
};

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
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

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM };
