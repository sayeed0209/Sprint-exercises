const { readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const reverseText = str => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
try {
	const files = readdirSync(inbox);
	files.forEach(file => {
		const read = readFileSync(join(inbox, file), "utf8");
		writeFileSync(join(outbox, file), reverseText(read), "utf8");
	});
} catch (err) {
	console.log(err.message);
}
