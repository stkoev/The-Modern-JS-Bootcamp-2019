let getScore = function(name = 'Anonymous', score = 0) {
	return `Name: ${name}, Score: ${score} `;
};

let scoreText = getScore('sefan', 95);
console.log(scoreText);

let getTip = function(check, tipPercent = 0.1) {
	let percent = tipPercent * 100;
	let tipSize = check * tipPercent;
	return `A ${percent} percent tip of ${check} euros is ${tipSize} euros`;
};

let tip = getTip(100, 0.15);
console.log(tip);
