let greetUser = function() {
	console.log('wellcome user');
};

let square = function(num) {
	let number = num;
	let result = number * number;
	return result;
};

console.log(square(5));

let convertFtoC = function(fTemp) {
	let celsiusTemp = (fTemp - 32) * 5 / 9;
	return celsiusTemp;
};

console.log(convertFtoC(68));
