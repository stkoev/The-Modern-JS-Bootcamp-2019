let gradeCalc = function(score = 0, maxScore = 100) {
	if (typeof score !== 'number' || typeof maxScore !== 'number') {
		throw Error('Please provide numbers as input!');
	}
	let percentage = score / maxScore * 100;
	let grade = '';
	if (percentage >= 90) {
		grade = 'A';
	} else if (percentage >= 80) {
		grade = 'B';
	} else if (percentage >= 70) {
		grade = 'C';
	} else if (percentage >= 60) {
		grade = 'D';
	} else {
		grade = 'F';
	}
	return `${score}/${maxScore} -> you have got a ${grade} (${percentage}%)`;
};

try {
	let studentScore = gradeCalc('89', 100);
	console.log(studentScore);
} catch (e) {
	console.log(e.message);
}
