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

const getEmployee =  id => {
	return new Promise(async (resolve, reject) => {
		const result =await  employees.find(employee => employee.id === id);
		if (!result) {
			reject('No employee found for id:' + id);
		} else {
			resolve(result);
		}
	});
};



const getSalary =  employeeObj => {
	return new Promise(async(resolve, reject) => {
		const result = await salaries.find(salaryArr => salaryArr.id === employeeObj.id);
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

// exercise 3
const employeeSummary = async id => {
	const employeeData = {};
	employeeData.salary = await getSalary({ id });
	employeeData.name = await getEmployee(id);

	return employeeData;
};

console.log(employeeSummary(1));
console.log(
	employeeSummary(1).then(msg => {
		console.log('Name:' + msg.name.name + ' , ' + 'Salray: ' + msg.salary);
	})
);

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
	console.log('im outside of set time out');
	setTimeout(() => {
		callback();
		console.log('im inside of set time out');
	}, 2000);
};
const sum = () => {
	console.log(2 + 2);
};
console.log(annonymus(sum));
