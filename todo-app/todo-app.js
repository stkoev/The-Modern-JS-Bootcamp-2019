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

// you have ? todos left
// Add paragraph for each todo
const fillTodoList = function(array) {
	let notCompleted = 0;
	const divider = '='.repeat(todos.length);
	const dividerLine = document.createElement('p');
	dividerLine.textContent = divider;
	document.querySelector('body').appendChild(dividerLine);

	array.forEach((element) => {
		const newParagraph = document.createElement('p');
		newParagraph.textContent = element.title;
		if (!element.completed) {
			notCompleted++;
		}
		document.querySelector('body').appendChild(newParagraph);
	});
	document.querySelector('body').appendChild(dividerLine);
	const notCompletedInfo = document.createElement('h3');
	notCompletedInfo.textContent = `You have ${notCompleted} tasks not done.`;
	document.querySelector('body').appendChild(notCompletedInfo);
};

const incompleteTodos = todos.filter((todo) => {
	return !todo.completed;
});
fillTodoList(todos);

// Listen for new ToDo creation
document.querySelector('#add-todo').addEventListener('click', (e) => {
	e.target.animate(
		[
			// keyframes
			{ transform: 'translateY(0px)' },
			{ transform: 'translateY(-300px)' }
		],
		{
			// timing options
			duration: 1000,
			iterations: 1
		}
	);
});

//Event listener for new todos
document.querySelector('#new-todo-text').addEventListener('input', (e) => {
	console.log(e.target.value);
});
