'use strict';

const todos = getSavedTodos();

const filters = {
	searchText: '',
	hideCompleted: false
};

renderTodos(todos, filters);

// Listen for todo filter change
document.getElementById('search-text').addEventListener('input', (e) => {
	console.log(e.target.value);
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});

// Form event listener
document.getElementById('new-todo').addEventListener('submit', (e) => {
	e.preventDefault();
	const text = e.target.elements.newTodo.value.trim('');
	if (text.length > 0) {
		todos.push({
			id: uuidv4(),
			title: text,
			completed: false
		});
		saveTodos(todos);
		e.target.elements.newTodo.value = '';
		renderTodos(todos, filters);
	}
});

// Checkbox event listener
document.getElementById('hide-completed').addEventListener('change', (e) => {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});

// // document.querySelector('#add-todo').addEventListener('click', (e) => {
// // 	e.target.animate(
// // 		[
// // 			// keyframes
// // 			{ transform: 'translateY(0px)' },
// // 			{ transform: 'translateY(-300px)' }
// // 		],
// // 		{
// // 			// timing options
// // 			duration: 1000,
// // 			iterations: 1
// // 		}
// // 	);
// // });
