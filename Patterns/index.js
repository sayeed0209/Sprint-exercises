// exe 1
const fs = require("fs").promises;
const path = require("path");
const data = "hello my name is sayeed";
const inbox = path.join(__dirname, "inbox");
const outbox = path.join(__dirname, "outbox");
const reverseText = str => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
async function readAndWriteReverse(dir1, dir2) {
	try {
		const files = await fs.readdir(dir1);
		for (let file of files) {
			const readfile = await fs.readFile(path.join(dir1, file), "utf8");
			const write = await fs.writeFile(
				path.join(dir2, file),
				reverseText(readfile),
				"utf8"
			);
		}
	} catch (err) {
		console.log(err.message);
	}
}
readAndWriteReverse("inbox", "outbox");
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
