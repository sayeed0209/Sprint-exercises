// exercise 1
// Create a function that returns a Promise that invokes the resolve () function or reject () that it receives. Invoke it from the outside by passing both functions that print a different message in each case.
const randomFunc = str => {
	return new Promise((resolve, reject) => {
		if (str) {
			resolve(str);
		} else {
			reject("Error: Failed to resolve promise");
		}
	});
};

// reslove promise
randomFunc("Hello Sayeed")
	.then(msg => {
		console.log(msg);
	})
	.catch(err => {
		console.log(err);
	});

// // reject promise
randomFunc()
	.then(msg => {
		console.log(msg);
	})
	.catch(err => {
		console.log(err);
	});

// exercise 2
const greetings = (msg, callback) => {
	callback(msg);
};
const msg = name =>
	name == "sayeed"
		? console.log("hello " + name)
		: console.log("bye bye " + name);
console.log(greetings("sayeed", msg));
// exercise 3
let employees = [
	{
		id: 1,
		name: "Linux Torvalds",
	},
	{
		id: 2,
		name: "Bill Gates",
	},
	{
		id: 3,
		name: "Jeff Bezos",
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

const getEmployees = employeeId => {
	return new Promise((resolve, reject) => {
		const result = employees.find(employee => employee.id === employeeId);
		if (!result) {
			reject("No employees found with id :" + employeeId.id);
		} else {
			resolve(result);
		}
	});
};

const getSalary = employeeObj => {
	return new Promise((resolve, reject) => {
		const result = salaries.find(salary => salary.id === employeeObj.id);
		if (!result) {
			reject("No salray found for object with id: " + employeeObj.id);
		} else {
			resolve(result);
		}
	});
};

getEmployees(1)
	.then(result => getSalary(result))
	.then(salary => console.log(salary))
	.catch(err => {
		console.log(err);
	});
getEmployees(55)
	.then(result => getSalary(result))
	.then(salary => console.log(salary))
	.catch(err => {
		console.log(err);
	});