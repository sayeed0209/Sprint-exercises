class ScoreBoard {
	constructor() {
		if (ScoreBoard.instance == null) {
			this.board = [];
			ScoreBoard.instance = this;
		}
		return ScoreBoard.instance;
	}
	join(name) {
		this.board.push({ name, score: 0 });
	}
	leave(name) {
		this.board = this.board.filter(player => player.name !== name);
	}
	update(name, score) {
		const playerIndex = this.board.findIndex(player => player.name === name);
		if (playerIndex > -1) {
			this.board[playerIndex].score += score;
		}
	}

	showScores() {
		return this.board;
	}

	getWinner() {
		return this.sort()[0];
	}
	sort() {
		return this.board.sort((p1, p2) => p2.score - p1.score);
	}
}

const scoreBoardObj = new ScoreBoard();
Object.freeze(scoreBoardObj);
module.exports = scoreBoardObj;
