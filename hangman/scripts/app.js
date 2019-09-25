// Pimitive value: string, number, boolean, null, undefined

const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
let game1;

window.addEventListener('keypress', (e) => {
	const guess = String.fromCharCode(e.charCode);
	game1.makeGuess(guess);
	render();
});

const render = () => {
	puzzleEl.innerHTML = '';
	guessesEl.textContent = game1.statusMessage;
	[ ...game1.puzzle ].forEach((letter) => {
		const letterEl = document.createElement('span');
		letterEl.textContent = letter;
		puzzleEl.appendChild(letterEl);
	});
};

const startGame = async () => {
	const puzzle = await getPuzzle('3');
	game1 = new Hangman(puzzle, 5);
	render();
};

document.getElementById('reset').addEventListener('click', startGame);

startGame();

// getCurrentCountry()
// 	.then((country) => {
// 		console.log(country.name);
// 	})
// 	.catch((err) => {
// 		console.log('error:', err);
// 	});

// fetch('http://puzzle.mead.io/puzzle', {})
// 	.then((response) => {
// 		if (response.status === 200) {
// 			return response.json();
// 		} else {
// 			throw new Error('Unable to fech puzzle');
// 		}
// 	})
// 	.then((data) => {
// 		console.log(data.puzzle);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
