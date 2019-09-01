// const printTodo = function(num) {
// 	console.log(todos[num]);
// };

// const deleteTodo = function(list, num) {
// 	list.splice(num - 1, 1);
// };
// const addLastTodo = function(list, toDo) {
// 	list.push(toDo);
// };
// const removeFirstTodo = function(list) {
// 	list.shift();
// };

// const printTodoList = function(list) {
// 	const message = `You have ${list.length} things to do!`;
// 	console.log(message);
// 	const separator = '=';
// 	console.log(separator.repeat(message.length));
// 	list.forEach((element, index) => {
// 		console.log(`${index + 1}. ${element}`);
// 	});
// 	console.log(separator.repeat(message.length));
// 	console.log('...so far, this is it');
// };

const deleteTodo = (todos, searchString) => {
	const index = todos.findIndex((todo) => {
		return todo.title.toLowerCase() === searchString.toLowerCase();
	});
	if (index && todos[index].completed) {
		const deletedTodo = todos.splice(index, 1);
		console.log(`${deletedTodo} has been removed`);
	} else {
		if (index === -1) {
			console.log(`No such todo in the list!`);
		} else {
			console.log(`The task is not completed:`);
			console.log(`|->> ${todos[index].title} <<--|`);
		}
	}
};

const getThingsTodo = (todos) => {
	const remainingTodos = todos.filter((todo) => {
		return !todo.completed;
	});
	if (remainingTodos.length > 0) {
		return remainingTodos;
	} else {
		console.log('Nothing left to do...');
	}
};

const sortTodos = (todos) => {
	todos.sort((a, b) => {
		if (!a.completed && b.completed) {
			return -1;
		} else if (!b.completed && a.completed) {
			return 1;
		} else {
			return 0;
		}
	});
};

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
// let numOfTodos = todos.length;
// console.log(printTodo(0));
// console.log(printTodo(todos.length - 2));

// deleteTodo(todos, 2);
// console.log(todos);
// addLastTodo(todos, 'exercise again and again');
// console.log(todos);
// removeFirstTodo(todos);

// printTodoList(todos);
// console.log(todos);
// deleteTodo(todos, 'buy food');
// console.log(todos);

// console.log('Remaining things to do:');
// console.log(getThingsTodo(todos));

sortTodos(todos);
console.log(todos);
