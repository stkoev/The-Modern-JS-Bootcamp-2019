const getPuzzle = async (wordCount) => {
	const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
	if (response.status === 200) {
		const data = await response.json();
		return data.puzzle;
	} else {
		throw new Error('Unable to fetch puzzle');
	}
};
const getPuzzleOld = (wordCount) => {
	return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error('Unable to fetch puzzle');
			}
		})
		.then((data) => {
			return data.puzzle;
		});
};

const getCountry = async (countryCode) => {
	const response = await fetch(`//restcountries.eu/rest/v2/all`);
	if (response.status === 200) {
		const data = await response.json();
		return data.find((country) => {
			return country.alpha2Code === countryCode;
		});
	} else {
		throw new Error(`Unable to fetch country`);
	}
};

const getLocation = async () => {
	const response = await fetch(`//ipinfo.io/json?token=538f74436c0451`);
	if (response.status === 200) {
		return response.json();
	} else {
		throw new Error('Unable to fetch location');
	}
};

const getCurrentCountry = async () => {
	const location = await getLocation();
	const country = await getCountry(location.country);
	return country;
};

const getCurrentCountryOld = async () => {
	let location = await fetch('https://ipinfo.io/json?token=538f74436c0451');
	if (location.status === 200) {
		location = await location.json();
	} else {
		throw new Error('Unable to fetch location');
	}
	let countries = await fetch(`http://restcountries.eu/rest/v2/all`);
	if (countries.status === 200) {
		countries = await countries.json();
	} else {
		throw new Error('Unable to fetch countries');
	}
	return countries.find((country) => {
		return country.alpha2Code === location.country;
	});
};

// const getCountry = (countryCode) =>
// 	new Promise((resolve, reject) => {
// 		const countryRequest = new XMLHttpRequest();
// 		countryRequest.addEventListener('readystatechange', (e) => {
// 			if (e.target.readyState === 4 && e.target.status === 200) {
// 				const data = JSON.parse(e.target.responseText);
// 				const country = data.find((country) => {
// 					return country.alpha2Code === `${countryCode}`;
// 				});
// 				resolve(country);
// 			} else if (e.target.readyState === 4) {
// 				reject(`An error has taken place`);
// 			}
// 		});

// 		countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// 		countryRequest.send();
// 	});
