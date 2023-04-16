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
		const opponentGameBoard = _playerOneTurn ? _playerTwo.gameboard : _playerOne.gameboard;
		this.takeTurn(AITurnCoords(opponentGameBoard));
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

function AITurnCoords(gameboard) {
	let damagedCell = getDamagedCell(gameboard);
	let isVertical = damagedCell ? isShipVertical(gameboard, damagedCell) : null;

	if (damagedCell == null) {
		return getRandomUndamagedCell(gameboard);
	}

	return getCellAround(gameboard, damagedCell, isVertical);
}

function getRandomUndamagedCell(gameboard) {
	const cells = [];
	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			if (!gameboard.getCell([row, col]).isHit) {
				cells.push([row, col]);
			}
		}
	}

	return cells[getRandomInt(cells.length)];
}

function getCellAround(gameboard, cell, isVertical) {
	const cells = [];
	const [row, col] = cell;

	if (isVertical === null) {
		if (row > 0 && !gameboard.getCell([row - 1, col]).isHit) {
			cells.push([row - 1, col]);
		}
		if (row < 9 && !gameboard.getCell([row + 1, col]).isHit) {
			cells.push([row + 1, col]);
		}

		if (col > 0 && !gameboard.getCell([row, col - 1]).isHit) {
			cells.push([row, col - 1]);
		}
		if (col < 9 && !gameboard.getCell([row, col + 1]).isHit) {
			cells.push([row, col + 1]);
		}
	}
	if (isVertical === true) {
		for (let up = row - 1; up >= 0; --up) {
			if (gameboard.getCell([up, col]).isHit) {
				if (gameboard.getCell([up, col]).ship == null) {
					break;
				}
			} else {
				cells.push([up, col]);
				break;
			}
		}
		for (let down = row + 1; down < 10; ++down) {
			if (gameboard.getCell([down, col]).isHit) {
				if (gameboard.getCell([down, col]).ship == null) {
					break;
				}
			} else {
				cells.push([down, col]);
				break;
			}
		}
	}
	if (isVertical === false) {
		for (let left = col - 1; left >= 0; --left) {
			if (gameboard.getCell([row, left]).isHit) {
				if (gameboard.getCell([row, left]).ship == null) {
					break;
				}
			} else {
				cells.push([row, left]);
				break;
			}
		}
		for (let right = col + 1; right < 10; ++right) {
			if (gameboard.getCell([row, right]).isHit) {
				if (gameboard.getCell([row, right]).ship == null) {
					break;
				}
			} else {
				cells.push([row, right]);
				break;
			}
		}
	}

	return cells[getRandomInt(cells.length)];
}

function getDamagedCell(gameboard) {
	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			if (
				gameboard.getCell([row, col]).isHit &&
				gameboard.getCell([row, col]).ship != null &&
				gameboard.getCell([row, col]).ship.isAlive
			) {
				return [row, col];
			}
		}
	}

	return null;
}

function isShipVertical(gameboard, damagedCell) {
	const [row, col] = damagedCell;

	if (row > 0 && gameboard.getCell([row - 1, col]).isHit && gameboard.getCell([row - 1, col]).ship != null) {
		return true;
	}
	if (row < 9 && gameboard.getCell([row + 1, col]).isHit && gameboard.getCell([row + 1, col]).ship != null) {
		return true;
	}

	if (col > 0 && gameboard.getCell([row, col - 1]).isHit && gameboard.getCell([row, col - 1]).ship != null) {
		return false;
	}
	if (col < 9 && gameboard.getCell([row, col + 1]).isHit && gameboard.getCell([row, col + 1]).ship != null) {
		return false;
	}

	return null;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
