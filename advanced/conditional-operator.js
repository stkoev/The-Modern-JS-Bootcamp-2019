const myAge = 14;
let message;
console.log(message);
message = myAge >= 18 ? 'you can vote' : 'you can NOT vote';
console.log(message);

const showPage = () => {
	console.log('Showing the page');
};
const showErrorPage = () => {
	console.log('showing the error page');
};
myAge >= 21 ? showPage() : showErrorPage();

const team = [ 'tyler', 'porter' ];

const msg = team.length <= 4 ? 'Team size: 3' : 'Too many peaople on your team';
console.log(msg);
