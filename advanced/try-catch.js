const getTip = (amount) => {
	if (typeof amount === Number) {
		return amount * 0.25;
	} else {
		throw Error(`Argument must be a number!`);
	}
};

try {
	const result = getTip('test');
	console.log(result);
} catch (e) {
	console.log('catch block running');
}
