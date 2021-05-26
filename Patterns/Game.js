const ScoreBoard = require("./ScoreBoard");
class Game {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	join(player) {
		ScoreBoard.join(player.getName());
	}
}

module.exports = Game;
