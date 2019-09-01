let num = 183.941;

console.log(num.toFixed(2));

let min = 10;
let max = 20;

let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);

let makeGuess = function(num) {
	let randomNum = Math.floor(Math.random() * (10 + 1));
	return randomNum === num;
};

console.log(makeGuess(0));
