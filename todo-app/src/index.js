// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getTodos, createTodo, loadTodos } from './todos';
import { renderTodos } from './views';
import { getFilters, setFilters } from './filters';
// import uuidv4 from 'uuid/v4';

const filters = getFilters();

//===============tests
// const todos = getTodos();
// console.log(todos);
//===============tests

// Render initial todos
renderTodos();

// Set up search text handler
document.getElementById('search-text').addEventListener('input', (e) => {
	// console.log(e.target.value);
	setFilters({
		searchText: e.target.value
	});
	renderTodos();
});

// Set up checkbox handler
document.getElementById('hide-completed').addEventListener('change', (e) => {
	setFilters({
		hideCompleted: e.target.checked
	});
	renderTodos();
});

// Set up form submission handler
document.getElementById('new-todo').addEventListener('submit', (e) => {
	e.preventDefault();
	const text = e.target.elements.newTodo.value.trim('');
	if (text.length > 0) {
		createTodo(text);
		e.target.elements.newTodo.value = '';
		renderTodos();
	}
});

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
	if (e.key === 'todos') {
		loadTodos();
		renderTodos();
	}
});
