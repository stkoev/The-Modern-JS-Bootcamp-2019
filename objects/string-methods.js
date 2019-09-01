let name = 'Stefan Koev';

let isValidPassword = function(str) {
	if (str.length > 8 && !str.includes('password')) {
		return `it is a valid password`;
	} else {
		return `not a valid password`;
	}
};

let isValidPassword2 = function(str) {
	return str.length > 8 && !str.includes('password');
};
console.log(isValidPassword('aldskflaser'));
console.log(isValidPassword('alds'));
console.log(isValidPassword('1123adfpasswordlkj2130'));
console.log(isValidPassword2('aldskflaser'));
console.log(isValidPassword2('alds'));
console.log(isValidPassword2('1123adfpasswordlkj2130'));
