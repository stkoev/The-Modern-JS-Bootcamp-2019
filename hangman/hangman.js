'use strict';
// Constructor function

const Hangman = function(word, remainingGuesses) {
	this.word = word.toLowerCase().split('');
	this.remainingGuesses = remainingGuesses;
	this.guessedLetters = [];
	this.status = 'playing';
};

Hangman.prototype.calculateStatus = function() {
	const finished = this.word.every((letter) => {
		return this.guessedLetters.includes(letter);
	});

	// let finished = true;
	// this.word.forEach((letter) => {
	// 	if (this.guessedLetters.includes(letter)) {
	// 	} else {
	// 		finished = false;
	// 	}
	// });
	// const lettersUnguessed = this.word.filter((letter) => {
	// 	return !this.guessedLetters.includes(letter);
	// });
	// const finished = lettersUnguessed.length === 0;

	if (this.remainingGuesses === 0) {
		this.status = 'failed';
	} else if (finished) {
		this.status = 'finished';
	} else {
		this.status = 'playing';
	}
};

Hangman.prototype.getStatusMessage = function() {
	let message = '';
	if (this.status === 'playing') {
		message = `Guesses left: ${this.remainingGuesses}`;
		return message;
	} else if (this.status === 'failed') {
		message = `Nice try! The word was: ${this.word.join('')}`;
		return message;
	} else {
		message = 'Great work! You guessed the word.';
		return message;
	}
};

Hangman.prototype.getPuzzle = function() {
	let puzzle = '';
	this.word.forEach((letter) => {
		if (this.guessedLetters.includes(letter) || letter === ' ') {
			puzzle += letter;
		} else {
			puzzle += '*';
		}
	});
	return puzzle;
};

Hangman.prototype.makeGuess = function(guess) {
	guess = guess.toLowerCase();
	const isUnique = !this.guessedLetters.includes(guess);
	if (this.status !== 'playing') {
		return;
	}
	if (isUnique) {
		this.guessedLetters.push(guess);
	}
	if (isUnique && !this.word.includes(guess)) {
		this.remainingGuesses--;
	}
	this.calculateStatus();
	this.getStatusMessage();
};
