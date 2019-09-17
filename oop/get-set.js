const data = {
	locations: [],
	get location() {
		return this._location;
	},
	set location(value) {
		this._location = value.trim();
		this.locations.push(this._locations);
	}
};

data.location = 'Philadelphia';
