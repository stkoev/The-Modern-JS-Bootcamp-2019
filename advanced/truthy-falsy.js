const products = [];
const product = products[0];

// Truty - values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product !== undefined) {
	console.log('product found');
} else {
	console.log('product NOT found');
}
