const square = (num) => {
	return num * num;
};

const people = [
	{
		name: 'andrew',
		age: 27
	},
	{
		name: 'vikram',
		age: 22
	},
	{
		name: 'jes',
		age: 22
	}
];

// const under30 = people.filter(function(person) {
// 	return age < 30;
// });

const under30 = people.filter((person) => person.age < 30);

const exactAge = function(people, age) {
	return people.filter((person) => person.age === age);
};
console.log(exactAge(people, 22));

const person = people.find((el) => el.age === 22);
console.log(`persons is: ${person.name}, age: ${person.age}`);
