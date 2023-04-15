export default function Game(player1, player2) {
	const _playerOne = player1;
	const _playerTwo = player2;
	let _playerOneTurn = true;

	function takeTurn(coords) {
		if (this.isGameOver) {
			throw Error('Cannot take turn after game is over');
		}

		let switchPlayers;

		try {
			const isHit = (_playerOneTurn ? _playerTwo : _playerOne).gameboard.receiveAttack(coords);
			switchPlayers = !isHit;
		} catch (error) {
			switchPlayers = false;
		} finally {
			if (switchPlayers) {
				_playerOneTurn = !_playerOneTurn;
			}
		}
	}

	function takeAITurn() {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		this.takeTurn([getRandomInt(10), getRandomInt(10)]);
	}

	return {
		get playerOne() {
			return _playerOne;
		},

		get playerTwo() {
			return _playerTwo;
		},

		get activePlayer() {
			return _playerOneTurn ? _playerOne : _playerTwo;
		},

		get isGameOver() {
			return _playerOne.gameboard.isGameOver || _playerTwo.gameboard.isGameOver;
		},

		takeTurn,
		takeAITurn,
	};
}
