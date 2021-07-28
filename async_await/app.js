// exercise 1
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
	{ id: 1, salary: 4000 },
	{ id: 2, salary: 1000 },
	{ id: 3, salary: 2000 },
];
const getEmployee = id => {
	const employee = employees.find(value => value.id === id);
	return new Promise((resolve, reject) => {
		if (!employee) {
			reject(new Error(`Employee not found for ${id}`));
		}
		resolve(employee);
	});
};

const getSalary = employeeId => {
	const salary = salaries.find(value => value.id === employeeId.id);
	return new Promise((resolve, reject) => {
		if (!salary) {
			reject(new Error(`Salary not found for employee ${employeeId}`));
		} else {
			resolve(salary.salary);
		}
	});
};
const salary = async id => {
	const employee = await employees.find(value => value);
	const salary = await salaries.find(value => value.id === employee.id);
	console.log(employee.name, salary.salary);
};
salary(1);

// exercise 2

const sayHello = async name => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(`${name} I say hello to you after 2 seconds `),
			2000
		);
	});

	return await promise;
};
const passGreeting = async name => {
	return await sayHello(name);
};
passGreeting("Sayeed").then(res => console.log(res));

// exe 3
const sayHelloAgain = async name => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(`${name} I say hello to you after 2 seconds `),
			2000
		);
	});

	return await promise;
};
const passGreetingAgain = async name => {
	try {
		if (!name) {
			throw new Error("you have not provided a name");
		}
		return await sayHelloAgain(name);
	} catch (err) {
		console.log({ error: err.message });
	}
};
passGreetingAgain('').then(res => console.log(res));
