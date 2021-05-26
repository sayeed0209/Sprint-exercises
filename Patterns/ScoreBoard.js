class ScoreBoard {
	constructor() {
		this.board = [];
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

	getWinners() {
		return this.sort()[0];
	}
	sort() {
		return this.board.sort((p1, p2) => p2.score - p1.score);
	}
}
// const p = new ScoreBoard();
// console.log(p.join("sayeed"));
// console.log(p.join("jafor"));
// console.log(p.leave("jafor"));
// console.log(p);
module.exports = new ScoreBoard();
