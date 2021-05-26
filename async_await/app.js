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

const getEmployee = async employeeId => {
	const result = await employees.find(
		employee => employee.id === employeeId.id
	);
	return result
		? result
		: "The id you are looking for not exists in the employee array";
};

getEmployee({ id: 1 }).then(res => {
	console.log(res);
});

const getSalary = async employeeId => {
	const result = await salaries.find(employee => employee.id === employeeId.id);
	return result ? result : "No salary found with this id";
};

getSalary({ id: 1 })
	.then(value => console.log(value))
	.catch(err => console.log(err));

// exercise 3
const employeeSummary = async employeeId => {
	const employee = await employees.find(employee => {
		if (employee.id === employeeId.id) {
			return employee.name;
		}
	});

	const salray = await salaries.find(salary => {
		if (salary.id === employeeId.id) {
			return salary.salary;
		}
	});
	return `Name: ${employee.name} and his Salary : ${salray.salary}`;
};
employeeSummary({ id: 1 }).then(res => console.log(res));

// exercise 4

const annonymusFunction = async () => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 2000);
	});

	return await promise;
};

annonymusFunction().then(res => console.log(res));
