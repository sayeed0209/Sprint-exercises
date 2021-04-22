// exercise 1
(() => {
	const a = 5;
	const b = 6;
	const result = a + b;
	console.log(result);
})();
// exercise 1
((a, b) => console.log(a + b))(5, 9);

// exercise 2
const annonymus = name => {
	return { firstName: name };
};
const name = annonymus('sayeed');
console.log(name);

// exercise 3

class Person {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		return `My name is ${this.name}`;
	}
}

const p = new Person('Robin');
console.log(p.sayName());

// exercise 4
// Create an object-creating function, abstracting the definition of the classes. Invoke it with different definitions
