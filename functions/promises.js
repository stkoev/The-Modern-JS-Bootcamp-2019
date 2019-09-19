//calback
const getDataCallback = (callback) => {
	setTimeout(() => {
		callback(undefined, 'this is the data');
	}, 2000);
};

getDataCallback((err, data) => {
	if (err) {
	} else {
		console.log(data);
	}
});

// Promise
const getDataPromise = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`this is my success data: ${data}`);
			// reject('This is my promise error');
		}, 2000);
	});
};

const myPromise = getDataPromise();
myPromise.then(
	(data) => {
		console.log(data);
	},
	(err) => {
		console.log(err);
	}
);

myPromise.then(
	() => {
		console.log(data);
	},
	(err) => {
		console.log(err);
	}
);
