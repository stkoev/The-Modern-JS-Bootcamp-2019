// Pimitive value: string, number, boolean, null, undefined

const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');

const game1 = new Hangman('New York', 3);
puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();

window.addEventListener('keypress', function(e) {
	const guess = String.fromCharCode(e.charCode);
	game1.makeGuess(guess);
	puzzleEl.textContent = game1.getPuzzle();
	guessesEl.textContent = game1.getStatusMessage();
	console.log(game1.status);
});
