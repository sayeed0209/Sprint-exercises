// exercise 1
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
	{ id: 1, salary: 4000 },
	{ id: 2, salary: 1000 },
	{ id: 3, salary: 2000 },
];

const getEmployee = async id => {
	return await new Promise((resolve, reject) => {
		const result = employees.find(employee => employee.id === id);
		if (!result) {
			reject('No employee found for id:' + id);
		} else {
			resolve(result);
		}
	});
};
console.log(
	getEmployee(1)
		.then(res => console.log(res))
		.catch(err => console.log(err))
);

const getSlaray = async employeeObj => {
	return await new Promise((resolve, reject) => {
		const result = salaries.find(salaryArr => salaryArr.id === employeeObj.id);
		if (!result) {
			reject('No salary found with object id:' + employeeObj.id);
		} else {
			resolve(
				'The salaray of the employee number ' +
					result.id +
					' is: ' +
					result.salary
			);
		}
	});
};
console.log(
	getSlaray({ id: 1 })
		.then(res => console.log(res))
		.catch(err => console.log(err))
);
console.log(
	getSlaray({ id: 77, name: 'tim cook' })
		.then(res => console.log(res))
		.catch(err => console.log(err))
);

// exercise 3
const employeeSummary = async id => {
	const employeeData = {};
	employeeData.salary = await getSlaray({ id });
	employeeData.name = await getEmployee(id);

	return employeeData;
};

console.log(employeeSummary(1));
console.log(
	employeeSummary(1).then(msg => {
		console.log('Name:' + msg.name.name + ' , ' + 'Salray: ' + msg.salary);
	})
);
