// nivel 1 Ejercicio 1
((a, b) => {
	console.log(a + b);
})(2, 99);

// nivel 2 Ejercicio 1
const annonymus = (name => {
	return { name: name };
})("Sayeed");
console.log(annonymus.name);

// nivel 2 Ejercicio 2

class Persona {
	constructor(nombre = "sayeed") {
		this.nombre = nombre;
	}

	decirNombre() {
		console.log(`Mi nombre es ${this.nombre}`);
	}
}

const persona = new Persona();
const persona1 = new Persona("Robin");
console.log(persona.decirNombre());
console.log(persona1.decirNombre());

// nivel 3 Ejercicio 1
// // Create an object-creating function, abstracting the definition of the classes. Invoke it with different definitions
const Color = function (color) {
	this.color = color;
	if (this.constructor === Color) {
		throw new Error("Can not create an instance of an abstract class");
	}
};

// can not create an instance of an abstract function
const color = new Color("red");
console.log(color);
// you can add method to the abstract function and then return the result
Color.prototype.newColor = () => {
	return "Color name is" + this.color;
};
const drawColor = function (color) {
	this.color = color;
};
drawColor.prototype = Object.create(Color.prototype);
const draw = new drawColor("green");
console.log(draw);
