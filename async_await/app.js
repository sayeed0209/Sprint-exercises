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

const getEmployee = id => {
	return new Promise((resolve, reject) => {
		const result = employees.find(employee => {
			if (employee.id === id) {
				return employee;
			}
		});
		resolve(result);
	});
};

getEmployee(2).then(msg => {
	console.log(msg);
});
// const getEmployee = async id => {
// 	const result = employees.find(employee => {
// 		if (employee.id === id) {
// 			return employee;
// 		}
// 	});
// 	return result;
// };

const getSlaray = person => {
	const employeeSalary = salaries.find(salary => {
		if (salary.id === person.id) {
			return salary.salary;
		}
	});

	return employeeSalary;
};

console.log(getSlaray({ id: 1 }));

const employeeSummary = async id => {
	const employeeData = {};
	// employeeData.salary = await getSlaray({ id });
	// employeeData.name = await getEmployee(id);
	await Promise.all([getSlaray({ id }), getEmployee(id)]).then(res => {
		console.log((employeeData.salary = res[0].salary));
		console.log((employeeData.name = res[1].name));
	});
	return employeeData;
};

console.log(employeeSummary(1));
// console.log(
// 	employeeSummary(1).then(msg => {
// 		console.log(msg.name.name);
// 		console.log(msg.salary.salary);
// 	})
// );
// const add = id => {
// 	const res = employees.filter(name => {
// 		// console.log(e.id === id);
// 		const res1 = salaries.filter(salary => {
// 			// console.log(s.id === id && e.id === id);
// 			if (salary.id === id && name.id === id) {
// 				console.log(salary.salary, name.name);
// 				return salary.salary, name.name;
// 			}
// 		});
// 		console.log(res1);
// 	});
// 	console.log(res.name);
// };

// console.log(add(1));

// const log = console.log;
// const names = ['Archer', 'Lana', 'Cyril', 'Pam', 'Beron'];
// let pos = names.indexOf('Pam');
// log(pos, names[pos]);
// // remove
// names.splice(pos, 1);
