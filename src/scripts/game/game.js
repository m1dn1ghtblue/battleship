export default function Game(player1, player2) {
	const _playerOne = player1;
	const _playerTwo = player2;
	let _playerOneTurn = true;

	function takePlayerOneTurn(coords) {
		if (!_playerOneTurn) {
			throw Error('Cannot take player one turn while it is not their turn');
		}
		_takeTurn(coords, _playerTwo.gameboard);
	}

	function takePlayerTwoTurn(coords) {
		if (_playerOneTurn) {
			throw Error('Cannot take player two turn while it is not their turn');
		}
		_takeTurn(coords, _playerOne.gameboard);
	}

	function _takeTurn(coords, gameboard) {
		let switchPlayers;

		try {
			const isHit = gameboard.receiveAttack(coords);
			switchPlayers = !isHit;
		} catch (error) {
			switchPlayers = false;
		} finally {
			if (switchPlayers) {
				_playerOneTurn = !_playerOneTurn;
			}
		}
	}

	return {
		get isPlayerOneTurn() {
			return _playerOneTurn;
		},

		get isGameOver() {
			return _playerOne.gameboard.isGameOver || _playerTwo.gameboard.isGameOver;
		},

		takePlayerOneTurn,
		takePlayerTwoTurn,
	};
}
