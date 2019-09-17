const add = function(a, b) {
	console.log(arguments);
};

add(2, 22, 44, 55);
add(2, 22);

const car = {
	color: 'red',
	getSummary: () => {
		return `The car is: ${this.color}`;
	}
};

console.log(car.getSummary());
