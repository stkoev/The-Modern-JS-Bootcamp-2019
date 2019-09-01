let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
};

let otherBook = {
	title: 'A peoples history',
	author: 'Howard Zinn',
	pageCount: 723
};

let getSummary = function(book) {
	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pagecount} pages long`
	};
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.summary);

let convertFahrenheit = function(fahrenheit) {
	let celsius = (fahrenheit - 32) * 5 / 9;
	let kelvin = (fahrenheit + 459.67) * 5 / 9;
	let allTemps = {
		celsius: celsius,
		kelvin: kelvin,
		fahrenheit: fahrenheit
	};
	return allTemps;
};

let temps = convertFahrenheit(50);
console.log(`celisus = ${temps.celsius}, kelvin = ${temps.kelvin}, fahrenheit = ${temps.fahrenheit}`);
