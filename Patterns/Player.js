const ScoreBoard = require("./ScoreBoard");
class Player {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	win(scores) {
		ScoreBoard.update(this.name, scores);
	}
	lose(scores) {
		ScoreBoard.update(this.name, -scores);
	}
}
module.exports = Player;
