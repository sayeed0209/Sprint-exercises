// exercise  1

console.log('Hello World');

// exercise 2

alert('My name is Sayeed');

// exercise 3

const firstName = 'Abu';
const lastName = 'Sayeed';
console.log(`${firstName} ${lastName}`);

// exercise 4

const num1 = 15;
const num2 = 18;
console.log(`Sum of num1 and num2 is: ${num1 + num2}`);

// exercise 5

const exam_note = 5;

function result(exam_note) {
	if (exam_note > 4.9) {
		alert('passed');
	} else if (exam_note < 4.9) {
		alert('falied');
	}
}

result(5);

// exercise 6

const car = 'I have a blue car';
console.log(car.replace('blue', 'green'));
const regex = /blue/i;
console.log(car.replace(regex, 'green'));

// exercise 7

const obj = {
	0: 'table',
	1: 'chair',
	2: 'computer',
	3: 'notebook',
};

for (const [key, value] of Object.entries(obj)) {
	console.log(`object ${value} is in position ${key}`);
}
// exercise 8 & 9

function calculate(result, val1, val2) {
	if (result === 'sum' && val1 + val2) {
		return result, val1 + val2;
	} else if (result === 'subtraction' && val1 - val2) {
		return result, val1 - val2;
	} else if (result === 'multiplication' && val1 * val2) {
		return result, val1 * val2;
	} else if (result === 'division' && val1 / val2) {
		return result, val1 / val2;
	} else {
		return;
	}
}

console.log(calculate('sum', 5, 2));

//
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const res = document.getElementById('result');

// sum DOM manipulation
document.getElementById('sum').addEventListener('click', e => {
	e.preventDefault();
	const x = calculate('sum', parseInt(number1.value), parseInt(number2.value));
	res.textContent = `SUM: ${x}`;
});
// Substruct DOM manipulation
document.getElementById('substruct').addEventListener('click', e => {
	e.preventDefault();
	const x = calculate(
		'subtraction',
		parseInt(number1.value),
		parseInt(number2.value)
	);
	res.textContent = `Subtraction: ${x}`;
});
