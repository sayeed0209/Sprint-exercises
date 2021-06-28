// exe 1
const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const reverseText = str => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
function dir(err, files) {
	if (err) return console.log("Error:Folder inaccessible");
	files.forEach(file => readFileFromDir(file));
}
function readFileFromDir(file) {
	readFile(join(inbox, file), "utf8", invertedFile);
}

function invertedFile(err, data) {
	if (err) return console.log("Error: File error ");
	writeFile(join(outbox, file), reverseText(data), errorFunc);
}

function errorFunc(err) {
	if (err) return console.log("Error:File could not be saved!");
	console.log(`${this.file} was saved successfully`);
}
readdir(inbox, dir);
// exe 2

const ScoreBoard = require("./ScoreBoard");
const Game = require("./game/Game");
const Player = require("./game/Player");
const AAGame = new Game("AA-game");
const BBGame = new Game("BB-game");
const sayeed = new Player("Sayeed");
const elena = new Player("Elena");
const robin = new Player("Robin");
AAGame.join(sayeed);
AAGame.join(elena);
BBGame.join(robin);
sayeed.win(100);
sayeed.win(100);
sayeed.lose(50);
elena.lose(100);
elena.win(200);
robin.win(100);
robin.win(200);
console.log("AA: ", AAGame.getName());
console.log("BB: ", BBGame.getName());
console.log("scores: ", ScoreBoard.showScores());
console.log(
	`Winner: ${ScoreBoard.getWinner().name}, scores: ${
		ScoreBoard.getWinner().score
	}`
);
