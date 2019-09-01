let myAccount = {
	name: 'Stefan Koev',
	expenses: 0,
	income: 0
};

let addExpense = function(account, ammount) {
	account.expenses = account.expenses + ammount;
};

let addIncome = function(account, income) {
	account.income += income;
};

let resetAccount = function(account) {
	account.expenses = 0;
	account.income = 0;
};

let getAccountSummary = function(account) {
	let summary = `Account for ${account.name} has ${account.income -
		account.expenses}. $${account.income} in income, $${account.expenses} in expenses`;

	return summary;
};

addIncome(myAccount, 3500);
addExpense(myAccount, 250);
addExpense(myAccount, 250);
getAccountSummary(myAccount);
