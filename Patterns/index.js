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
