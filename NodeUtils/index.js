// Nivell 1
// exe 1
const recursiveFunc = () => {
	setInterval(() => {
		console.log("hola");
	}, 1000);
};
// recursiveFunc();

// exe 2

const fs = require("fs");
fs.writeFileSync("writeText.txt", "Hello Sayeed", err => {
	if (err) return err;
});
const readFile = fs.readFile("writeText.txt", "utf8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(data);
});

// Nivell 2
const { createGzip } = require("zlib");
const { pipeline } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const gzip = createGzip();
const source = createReadStream("writeText.txt");
const destination = createWriteStream("writeText.txt.gz");

pipeline(source, gzip, destination, err => {
	if (err) {
		console.error("An error occurred:", err);
		process.exitCode = 1;
	}
});

//nivell 3
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function lsExample() {
	const { stdout, stderr } = await exec("ls");
	console.log("stdout:", stdout);
	console.error("stderr:", stderr);
}
lsExample();
