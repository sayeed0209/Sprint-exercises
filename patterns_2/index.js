const Middleware = require("./Middleware");
class Maths {
	add({ a, b }) {
		return a + b;
	}
	subtract({ a, b }) {
		return a - b;
	}
	multiply({ a, b }) {
		return a * b;
	}
}
const calculator = new Maths();
const app = new Middleware(calculator);

app.use((req, next) => {
	req.a = req.a * 1;
	next();
});

app.use((req, next) => {
	req.b = req.b * 1;
	next();
});

console.log(app.add({ a: 5, b: 10 }));
console.log(app.subtract({ a: 10, b: 6 }));
console.log(app.multiply({ a: 2, b: 3 }));

const currency = require("./currency_conversions.json");

const decoratorFunc = curr => {
	return current_currency => {
		return curr * current_currency;
	};
};

function calculate(itmes, price) {
	return decoratorFunc(itmes)(price);
}

const result = decoratorFunc(currency.GBP_EUR)(100);
console.log(result);
const result2 = calculate(5, 8);
console.log(result2);
