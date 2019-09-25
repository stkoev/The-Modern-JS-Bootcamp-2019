// Promise
const getDataPromise = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided!');
			// reject('This is my promise error');
		}, 2000);
	});
};

const processData = async () => {
	let data = await getDataPromise(2);
	data = await getDataPromise(data);
};

processData()
	.then((data) => {
		console.log('Data', data);
	})
	.catch((err) => {
		console.log('Error:', err);
	});
