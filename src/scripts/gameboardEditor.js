import { makeGameboardGrid, makeGameboardUI } from './gameboardUI.js';
import '../styles/gameboardEditor.scss';

const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export default function GameboardEditor() {
	document.body.setAttribute('draggable', 'false');
	const editor = document.createElement('div');
	editor.classList.add('gameboard-editor');

	const gameboardContainer = document.createElement('div');
	gameboardContainer.classList.add('gameboard-container');
	editor.appendChild(gameboardContainer);

	const grid = makeGameboardGrid();
	const gameboardUI = makeGameboardUI();
	gameboardUI.appendChild(grid);
	gameboardContainer.appendChild(gameboardUI);
	const gridCells = grid.childNodes;

	const shipsContainer = document.createElement('div');
	shipsContainer.classList.add('ships-container');
	editor.appendChild(shipsContainer);

	shipsContainer.addEventListener('dragover', (e) => {
		e.preventDefault();
	});

	shipsContainer.addEventListener('drop', (e) => {
		const placeable = placeables.get(e.dataTransfer.getData('text/plain'));
		placeable.deleteCoords();
		placeable.drop();
		shipsContainer.appendChild(placeable.DOMObject);
		placeable.removeOnCLickCallback();
		_clearGridHints();
	});

	const placeables = new Map();

	for (let size of shipSizes) {
		const placeable = new ShipPlaceable(size);
		placeables.set(placeable.id, placeable);

		shipsContainer.appendChild(placeable.DOMObject);
	}

	_setGridCallback('dragover', (e) => {
		e.preventDefault();
	});

	_setGridCallback('dragenter', (e, row, col) => {
		e.preventDefault();
		const placeable = placeables.get(e.dataTransfer.getData('text/plain'));
		_showGridHint(row, col, placeable);
	});

	_setGridCallback('drop', (e, row, col) => {
		_clearGridHints();
		try {
			const cell = gridCells[row * 10 + col];
			cell.classList.remove('drag-over');
			const placeable = placeables.get(e.dataTransfer.getData('text/plain'));
			placeable.drop();
			_placeShip(row, col, placeable);
		} catch (error) {}
	});

	function _setGridCallback(event, callback) {
		for (let row = 0; row < 10; ++row) {
			for (let col = 0; col < 10; ++col) {
				gridCells[row * 10 + col].addEventListener(event, (e) => callback(e, row, col));
			}
		}
	}

	function _showGridHint(row, col, placeable) {
		_clearGridHints();
		const cells = new ShipPosition([row, col], placeable.size, placeable.isVertical).cells;
		if (_checkCoordinates(row, col, placeable) == true) {
			for (let [cellRow, cellCol] of cells) {
				gridCells[cellRow * 10 + cellCol].classList.add('drag-over');
			}
		}
	}

	function _clearGridHints() {
		for (let gridCell of gridCells) {
			gridCell.classList.remove('drag-over');
		}
	}

	function _placeShip(row, col, placeable) {
		if (!_checkCoordinates(row, col, placeable)) {
			throw Error(
				`Cannot place ${placeable.isVertical ? 'vertical' : 'horizontal'} ship of size ${
					placeable.size
				} at coordinates [${row}, ${col}]`
			);
		}
		placeable.setCoords(row, col);
		placeable.setOnClickCallback(() => {
			placeable.rotate();
			if (!_checkCoordinates(row, col, placeable)) {
				placeable.rotate();
			}
		});
		gridCells[row * 10 + col].appendChild(placeable.DOMObject);
	}

	function _checkCoordinates(row, col, placeable) {
		if (row < 0 || col < 0 || row > 9 || col > 9) {
			return false;
		}
		if (placeable.isVertical) {
			const bottom = row + placeable.size - 1;
			if (bottom > 9) {
				return false;
			}
		} else {
			const left = col + placeable.size - 1;
			if (left > 9) {
				return false;
			}
		}

		const thisCells = new ShipPosition([row, col], placeable.size, placeable.isVertical).cells;
		const occupiedCells = [];
		for (let [_, other] of placeables) {
			if (other.isPlaced && other.id != placeable.id) {
				occupiedCells.push(...new ShipPosition(other.coords, other.size, other.isVertical).cells);
			}
		}

		for (let [otherRow, otherCol] of occupiedCells) {
			for (let [thisRow, thisCol] of thisCells) {
				if (Math.abs(thisRow - otherRow) < 2 && Math.abs(thisCol - otherCol) < 2) {
					return false;
				}
			}
		}

		return true;
	}

	function isReady() {
		for (let [_, placeable] of placeables) {
			if (!placeable.isPlaced) {
				return false;
			}
		}

		return true;
	}

	function setGameboard(gameboard) {
		if (!isReady) {
			throw Error('Cannot set gameboard until all ships are placed');
		}

		for (let [_, placeable] of placeables) {
			gameboard.placeShip(placeable.coords, placeable.size, placeable.isVertical ? 'vertical' : 'horizontal');
		}
	}

	function placeRandom() {
		for (let [_, placeable] of placeables) {
			while (true) {
				if (getRandomInt(2) % 2) {
					placeable.rotate();
				}
				const row = getRandomInt(10);
				const col = getRandomInt(10);
				if (_checkCoordinates(row, col, placeable)) {
					_placeShip(row, col, placeable);
					break;
				}
			}
		}
	}

	return {
		get DOMObject() {
			return editor;
		},

		setGameboard,
		placeRandom,
		isReady,
	};
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function ShipPosition(coords, size, isVertical) {
	const _coords = coords;
	const _isVertical = isVertical;
	const _size = size;

	return {
		get size() {
			return _size;
		},

		get coords() {
			return _coords;
		},

		get isVertical() {
			return _isVertical;
		},

		get coords() {
			return _coords;
		},

		get cells() {
			const shipCells = [];
			const [row, col] = _coords;

			if (_isVertical) {
				for (let i = 0; i < _size; ++i) {
					shipCells.push([row + i, col]);
				}
			} else {
				for (let i = 0; i < _size; ++i) {
					shipCells.push([row, col + i]);
				}
			}

			return shipCells;
		},
	};
}

const generateId = idGenerator();

function ShipPlaceable(size) {
	const _id = generateId();
	const placeable = document.createElement('div');
	placeable.classList.add('ship-placeable');
	placeable.setAttribute('ship-size', size);
	placeable.setAttribute('draggable', 'true');

	let _isVertical = false;
	let _coords = null;

	placeable.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('text/plain', _id);
		placeable.classList.add('moving');
	});

	placeable.addEventListener('dragend', (e) => {
		drop();
	});

	function drop() {
		placeable.classList.remove('moving');
	}

	let _onClickCallback = null;

	function setOnClickCallback(callback) {
		removeOnCLickCallback();
		_onClickCallback = callback;
		placeable.addEventListener('click', _onClickCallback);
	}

	function removeOnCLickCallback() {
		placeable.removeEventListener('click', _onClickCallback);
		_onClickCallback = null;
	}

	function rotate() {
		_isVertical = !_isVertical;
		placeable.classList.toggle('vertical');
	}

	function setCoords(row, col) {
		_coords = [row, col];
		placeable.classList.add('placed');
	}

	function deleteCoords() {
		_coords = null;
		placeable.classList.remove('placed');
	}

	return {
		get id() {
			return _id;
		},

		get DOMObject() {
			return placeable;
		},

		get size() {
			return size;
		},

		get coords() {
			return _coords;
		},

		get isVertical() {
			return _isVertical;
		},

		get isPlaced() {
			return _coords != null;
		},

		setCoords,
		deleteCoords,
		drop,
		rotate,
		setOnClickCallback,
		removeOnCLickCallback,
	};
}

function idGenerator() {
	let nextId = 0;
	return function () {
		return `id_${nextId++}`;
	};
}
