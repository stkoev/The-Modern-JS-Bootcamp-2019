const todos = [
	{
		title: 'learn new programming techniques',
		completed: false
	},
	{
		title: 'drink morning coffee',
		completed: true
	},
	{
		title: 'study more',
		completed: true
	},
	{
		title: 'buy FOOD',
		completed: false
	},
	{
		title: 'have a breakfast',
		completed: true
	},
	{
		title: 'exercise a bit',
		completed: true
	},
	{
		title: 'learn even more',
		completed: false
	}
];

const filters = {
	searchText: '',
	hideCompleted: false
};

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

	const summary = document.createElement('h3');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;
	document.getElementById('todo-container').appendChild(summary);

	filteredTodos.forEach((todo) => {
		const p = document.createElement('p');
		p.textContent = todo.title;
		document.getElementById('todo-container').appendChild(p);
	});
};

renderTodos(todos, filters);

// Listen for todo filter change
document.getElementById('search-text').addEventListener('input', (e) => {
	console.log(e.target.value);
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});

// Form event listener
document.getElementById('new-todo').addEventListener('submit', function(e) {
	e.preventDefault();
	todos.push({
		title: e.target.elements.newTodo.value,
		completed: false
	});
	e.target.elements.newTodo.value = '';
	renderTodos(todos, filters);
});

// Checkbox event listener
document.getElementById('hide-completed').addEventListener('change', function(e) {
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
