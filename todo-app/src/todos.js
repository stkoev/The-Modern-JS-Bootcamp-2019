import uuidv4 from 'uuid/v4';

// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
	const todosJSON = localStorage.getItem('todos');

	try {
		return (todos = todosJSON ? JSON.parse(todosJSON) : []);
	} catch (e) {
		return [];
	}
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => {
	return todos;
};

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (newTodo) => {
	if (newTodo.length > 0) {
		todos.push({
			id: uuidv4(),
			title: newTodo,
			completed: false
		});
		saveTodos();
	}
};

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (todoId) => {
	const todoIndex = todos.findIndex((todo) => todo.id === todoId);
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
		saveTodos();
	}
};

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id);
	if (todo) {
		todo.completed = !todo.completed;
		saveTodos();
	}
};

// Make sure to call loadTodos and setup the exports
loadTodos();
export { getTodos, saveTodos, createTodo, removeTodo, toggleTodo, loadTodos };
