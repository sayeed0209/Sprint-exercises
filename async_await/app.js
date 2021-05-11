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

const getEmployee = async id => {
	const result = employees.find(employee => employee.id === id);
	if (!result) {
		return await Promise.reject("No employee found for id:" + id);
		// console.log("No employee found for id:" + id);
	} else {
		return await Promise.resolve(result);
		// console.log(result);
	}
};
// console.log(
// 	getEmployee(1)
// 		.then(value => console.log(value))
// 		.catch(err => console.log(err))
// );

const getSalary = async employeeObj => {
	const result = salaries.find(salaryArr => salaryArr.id === employeeObj.id);
	if (!result) {
		return await Promise.reject(
			"No salary found with object id:" + employeeObj.id
		);
	} else {
		return await Promise.resolve(
			"The salaray of the employee number " +
				result.id +
				" is: " +
				result.salary
		);
	}
};

console.log(
	getSalary({ id: 1 })
		.then(value => console.log(value))
		.catch(err => console.log(err))
);

// exercise 3
const employeeSummary = async id => {
	const employeeData = {};
	employeeData.salary = await getSalary({ id });
	employeeData.name = await getEmployee(id);

	return employeeData;
};

employeeSummary(4)
	.then(msg => {
		console.log("Name:" + msg.name.name + " , " + "Salray: " + msg.salary);
	})
	.catch(err => console.log(err));

const getEmployeeData = async () => {
	try {
		const employee = await getEmployee(1);
		const salary = await getSalary({ id: 1 });
		console.log(employee);
		console.log(salary);
	} catch (err) {
		console.log(err);
	}
};
getEmployeeData();

// // exercise 4
const annonymus = async callback => {
	console.log("im outside of set time out");
	setTimeout(() => {
		callback();
		console.log("im inside of set time out");
	}, 2000);
};
const sum = () => {
	console.log(2 + 2);
};
console.log(annonymus(sum));
