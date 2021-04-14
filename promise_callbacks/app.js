// exercise 1
// Create a function that returns a Promise that invokes the resolve () function or reject () that it receives. Invoke it from the outside by passing both functions that print a different message in each case.
const randomFunc = str => {
	return new Promise((resolve, reject) => {
		if (str) {
			resolve(str);
		} else {
			reject('Error: Failed to resolve promise');
		}
	});
};

// reslove promise
randomFunc('Hello Sayeed')
	.then(msg => {
		console.log(msg);
	})
	.catch(err => {
		console.log(err);
	});

// reject promise
randomFunc()
	.then(msg => {
		console.log(msg);
	})
	.catch(err => {
		console.log(err);
	});

// exercise 2
let employees = [
	{
		id: 1,
		name: 'Linux Torvalds',
	},
	{
		id: 2,
		name: 'Bill Gates',
	},
	{
		id: 3,
		name: 'Jeff Bezos',
	},
];

let salaries = [
	{
		id: 1,
		salary: 4000,
	},
	{
		id: 2,
		salary: 1000,
	},
	{
		id: 3,
		salary: 2000,
	},
];

const getEmployees = id => {
	const result = employees.find(value => {
		if (value.id === id) {
			return value;
		} else {
			return;
		}
	});
	return result.name;
};
const getSalary = employeeId => {
	const employeeSalary = salaries.find(salary => {
		if (salary.id === employeeId) {
			return salary;
		}
	});
	return employeeSalary;
};

console.log(getEmployees(1));
console.log(getSalary(1));

// exercise 3 and 4
Promise.all([getSalary(1), getEmployees(1), Promise.reject(555)])
	.then(values => {
		console.log(values);
	})
	.catch(err => {
		console.log(err);
	});
