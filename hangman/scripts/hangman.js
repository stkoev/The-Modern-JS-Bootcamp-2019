'use strict';
// Constructor function
class Hangman {
	constructor(word, remainingGuesses) {
		this.word = word.toLowerCase().split('');
		this.remainingGuesses = remainingGuesses;
		this.guessedLetters = [];
		this.status = 'playing';
	}
	calculateStatus() {
		const finished = this.word.every((letter) => {
			return this.guessedLetters.includes(letter) || letter === ' ';
		});
		if (this.remainingGuesses === 0) {
			this.status = 'failed';
		} else if (finished) {
			this.status = 'finished';
		} else {
			this.status = 'playing';
		}
	}
	get statusMessage() {
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
	}
	get puzzle() {
		let puzzle = '';
		this.word.forEach((letter) => {
			if (this.guessedLetters.includes(letter) || letter === ' ') {
				puzzle += letter;
			} else {
				puzzle += '*';
			}
		});
		return puzzle;
	}
	makeGuess(guess) {
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
	}
}
