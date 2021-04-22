// exercise 1
const user = name => {
	console.log(`My name is ${name}`);
};

user('sayeed');

// exercise 2

const userName = (fname, lname) => {
	console.log(`Fullname: ${fname} ${lname}`);
};

userName('abu', 'sayeed');

// exercise 3

const func = () => 'Hello';

console.log(`${func()} sayeed`);

// excercise 4

const generateNumbers = () => {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
};
generateNumbers();

// exercise 5
(function userName(name) {
	console.log(`My name is ${name}`);
})('sayeed');
