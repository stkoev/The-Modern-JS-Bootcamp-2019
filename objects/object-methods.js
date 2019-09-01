let restaurant = {
	name: 'Serendipity',
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function(partySize) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		return seatsLeft >= partySize;
	},
	seatParty: function(partySize) {
		if (this.checkAvailability(partySize)) {
			this.guestCount += partySize;
			console.log(`Party seated`);
		} else {
			console.log('not enough seats');
		}
	},
	removeParty: function(partySize) {
		this.guestCount -= partySize;
	}
};

// seatParty

// removeParty

restaurant.seatParty(72);
restaurant.seatParty(10);

console.log(restaurant.checkAvailability(5));
restaurant.removeParty(4);
console.log(restaurant.checkAvailability(5));
