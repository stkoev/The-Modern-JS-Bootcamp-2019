const account = {
	name: 'Stefan Koev',
	income: [],
	expenses: [],
	addIncome: function(description, amount) {
		this.income.push({
			description: description,
			amount: amount
		});
	},
	addExpense: function(desc, amount) {
		const expense = {
			desc: desc,
			amount: amount
		};
		this.expenses.push(expense);
	},
	getAccountSummary: function() {
		let totalExpenses = 0;
		let totalIncome = 0;
		let balance = 0;
		this.expenses.forEach((expense) => {
			totalExpenses += expense.amount;
		});
		this.income.forEach((element) => {
			totalIncome += element.amount;
		});
		balance = totalIncome - totalExpenses;
		console.log(
			`${account.name} has a balance of ${balance}, $${totalIncome} in income, $${totalExpenses} in expenses.`
		);
	}
};

account.addExpense('Rent', 450);
account.addExpense('Coffee', 2);
account.addIncome('job', 1000);
console.log(account.getAccountSummary());
