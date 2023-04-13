import Ship from './ship.js';

const MAX_COORDINATE = 9;

export default function Gameboard() {
	const grid = _makeGrid();
	let shipsAlive = 0;

	function placeShip(coords, size, orientation) {
		_validateCoordinates(coords);
		_validateOrientation(orientation);

		const cells = _getShipCells(coords, size, orientation);
		_validateShipCells(cells);

		const ship = new Ship(size);

		for (let [row, col] of cells) {
			grid[row][col].ship = ship;
		}

		shipsAlive++;
	}

	function getCell(coords) {
		_validateCoordinates(coords);

		return {
			get ship() {
				return grid[coords[0]][coords[1]].ship;
			},

			get isHit() {
				return grid[coords[0]][coords[1]].isHit;
			},
		};
	}

	function receiveAttack(coords) {
		_validateCoordinates(coords);
		let [row, col] = coords;

		if (grid[row][col].isHit) {
			throw Error(`Coordinates ${coords} have already been attacked`);
		}

		grid[row][col].isHit = true;

		if (grid[row][col].ship) {
			const ship = grid[row][col].ship;
			ship.hit();
			if (!ship.isAlive) {
				shipsAlive--;
			}
		}
	}

	function _makeGrid() {
		const grid = [];
		for (let i = 0; i <= MAX_COORDINATE; ++i) {
			grid.push([]);
			for (let j = 0; j <= MAX_COORDINATE; ++j) {
				grid[i].push({ ship: null, isHit: false });
			}
		}

		return grid;
	}

	function _getShipCells(coords, size, orientation) {
		const cells = [coords];

		if (orientation === 'horizontal') {
			for (let i = 1; i < size; ++i) {
				cells.push([coords[0], coords[1] + i]);
			}
		} else {
			for (let i = 1; i < size; ++i) {
				cells.push([coords[0] + i, coords[1]]);
			}
		}

		if (cells[cells.length - 1][0] > MAX_COORDINATE || cells[cells.length - 1][1] > MAX_COORDINATE) {
			throw Error(
				`Ship with coordinates ${coords}, size ${size} and ${orientation} orientation does not fit on the gameboard`
			);
		}

		return cells;
	}

	function _validateOrientation(orientation) {
		if (orientation != 'horizontal' && orientation != 'vertical') {
			throw Error(
				`Invalid ship orientation: ${orientation}. Orientation must be string 'horizontal' or 'vertical'`
			);
		}
	}

	function _validateCoordinates(coords) {
		if (
			!coords instanceof Array ||
			coords.length != 2 ||
			!Number.isInteger(coords[0]) ||
			!Number.isInteger(coords[1])
		) {
			throw Error('Grid coordinates must be passed as array containing two integer elements');
		}

		if (coords[0] < 0 || coords[1] < 0 || coords[0] > MAX_COORDINATE || coords[1] > MAX_COORDINATE) {
			throw Error(
				`Invalid grid coordinates: ${coords}. Coordinates must be non-negative integer not greater than ${MAX_COORDINATE}`
			);
		}
	}

	function _validateShipCells(cells) {
		for (let coords of cells) {
			if (!_checkSurrounding(coords)) {
				throw Error(`Cannot place ship cell at coordinates ${coords}`);
			}
		}
	}

	function _checkSurrounding(coords) {
		const [row, col] = coords;
		for (let i = row - 1; i <= row + 1; ++i) {
			for (let j = col - 1; j <= col + 1; ++j) {
				if (i >= 0 && i <= MAX_COORDINATE && j >= 0 && j <= MAX_COORDINATE && grid[i][j].ship != null) {
					return false;
				}
			}
		}
		return true;
	}

	return {
		get isGameOver() {
			return shipsAlive == 0;
		},

		placeShip,
		getCell,
		receiveAttack,
	};
}
