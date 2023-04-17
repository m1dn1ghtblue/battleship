import { makeGameboardGrid, makeGameboardUI } from './gameboardUI.js';
import '../styles/gameboardEditor.scss';

const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export default function GameboardEditor() {
	const grid = makeGameboardGrid();
	const gameboardUI = makeGameboardUI();
	gameboardUI.appendChild(grid);

	const placedShips = [];

	function setGameboard(gameboard) {
		//TODO add validation that all ships are placed

		for (let shipPosition of placedShips) {
			gameboard.placeShip(
				shipPosition.coords,
				shipPosition.size,
				shipPosition.isVertical ? 'vertical' : 'horizontal'
			);
		}
	}

	function placeShip(shipPosition) {
		if (_canPlaceShip(shipPosition)) {
			placedShips.push(shipPosition);
			_toggleShip(shipPosition.cells, true);
		} else {
			throw Error('Cannot place ship with given position', shipPosition);
		}
	}

	function _toggleShip(shipCells, active) {
		const gridCells = grid.childNodes;
		for (let [row, col] of shipCells) {
			if (active) {
				gridCells[row * 10 + col].classList.add('ship');
			} else {
				gridCells[row * 10 + col].classList.remove('ship');
			}
		}
	}

	function _removeShip(shipPosition) {
		const index = placedShips.indexOf(shipPosition);
		placedShips.splice(index, 1);
		_toggleShip(shipPosition.cells, false);
	}

	function _canPlaceShip(shipPosition) {
		if (placedShips.length == 0) {
			return true;
		}
		for (let otherShipPosition of placedShips) {
			if (!checkDistance(shipPosition, otherShipPosition)) {
				return false;
			}
		}
		return true;
	}

	function placeRandom() {
		const shipsToPlace = shipSizes.slice();
		while (shipsToPlace.length > 0) {
			try {
				const shipPosition = new ShipPosition(
					[getRandomInt(10), getRandomInt(10)],
					shipsToPlace[0],
					getRandomInt(2) % 2 == 0
				);

				placeShip(shipPosition);
				shipsToPlace.shift();
			} catch (e) {}
		}
	}

	return {
		get DOMObject() {
			return gameboardUI;
		},

		setGameboard,
		placeRandom,
	};
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function checkDistance(shipPosition1, shipPosition2) {
	const cells1 = shipPosition1.cells;
	const cells2 = shipPosition2.cells;
	for (let [row1, col1] of cells1) {
		for (let [row2, col2] of cells2) {
			if (Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1) {
				return false;
			}
		}
	}

	return true;
}

function ShipPosition(coords, size, isVertical) {
	if (!validatePosition(coords, size, isVertical)) {
		throw Error(
			`Cannot place ${isVertical ? 'vertical' : 'horizontal'} ship of size ${size} at coordinates ${coords}`
		);
	}

	let _coords = coords;
	let _isVertical = isVertical;

	function validatePosition(coords, size, isVertical) {
		if (typeof isVertical != 'boolean') {
			throw Error('isVertical must be boolean value');
		}

		const [row, col] = coords;
		if (row == undefined || col == undefined || row < 0 || col < 0 || row > 9 || col > 9) {
			throw Error(`Invalid ship coordinates: [${row}, ${col}]`);
		}

		if (isVertical) {
			const down = row + size - 1;
			if (down > 9) {
				return false;
			}
		} else {
			const left = col + size - 1;
			if (left > 9) {
				return false;
			}
		}

		return true;
	}

	return {
		get size() {
			return size;
		},

		get coords() {
			return _coords;
		},

		get cells() {
			const shipCells = [];
			const [row, col] = _coords;

			if (_isVertical) {
				for (let i = 0; i < size; ++i) {
					shipCells.push([row + i, col]);
				}
			} else {
				for (let i = 0; i < size; ++i) {
					shipCells.push([row, col + i]);
				}
			}

			return shipCells;
		},

		set coords(newCoords) {
			if (validatePosition(size, newCoords, _isVertical)) {
				_coords = newCoords;
			} else {
				throw Error(`Cannot set ship coordinates to ${newCoords}`, this);
			}
		},

		get isVertical() {
			return _isVertical;
		},

		set isVertical(newIsVertical) {
			if (validatePosition(size, _coords, newIsVertical)) {
				_isVertical = newIsVertical;
			} else {
				throw Error(`Cannot set ship orientation to ${newIsVertical ? 'vertical' : 'horizontal'}`, this);
			}
		},
	};
}
