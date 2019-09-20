//calback
const getDataCallback = (num, callback) => {
	setTimeout(() => {
		if (typeof num === 'number') {
			callback(undefined, num * 2);
		} else {
			callback('Number must be provided');
		}
	}, 2000);
};

getDataCallback(2, (err, data) => {
	if (err) {
	} else {
		getDataCallback(data, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
		});
	}
});

// Promise
const getDataPromise = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided!');
			// reject('This is my promise error');
		}, 2000);
	});
};

getDataPromise(2)
	.then(
		(data) => {
			getDataPromise(data).then(
				(data) => {
					console.log(data);
				},
				(err) => {
					console.log(err);
				}
			);
		},
		(err) => {
			console.log(`Error: ${err}`);
		}
	)
	.then();

getDataPromise(10)
	.then((data) => {
		return getDataPromise(data);
	})
	.then((data) => {
		return getDataPromise(data);
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
