import '../styles/gameboardUI.scss';
import '../styles/gameboardEditor.scss';

export default function GameboardUI(gameboard) {
	const grid = makeGameboardGrid();
	const gameboardUI = makeGameboardUI();
	const cells = grid.childNodes;
	gameboardUI.appendChild(grid);

	function setupGridOnclickCallback(callback) {
		for (let row = 0; row < 10; ++row) {
			for (let col = 0; col < 10; ++col) {
				cells[row * 10 + col].addEventListener('click', () => callback(row, col));
			}
		}
	}

	function revealGrid() {
		for (let row = 0; row < 10; ++row) {
			for (let col = 0; col < 10; ++col) {
				if (gameboard.getCell([row, col]).ship != null) {
					cells[row * 10 + col].classList.add('revealed');
				}
			}
		}
	}

	function updateGrid() {
		for (let row = 0; row < 10; ++row) {
			for (let col = 0; col < 10; ++col) {
				const UIcell = cells[row * 10 + col];
				const gameCell = gameboard.getCell([row, col]);
				if (gameCell.isHit) {
					UIcell.classList.add('hit');
					if (gameCell.ship != null) {
						UIcell.classList.add('damaged');
						if (!gameCell.ship.isAlive) {
							UIcell.classList.add('destroyed');
						}
					}
				}
			}
		}
	}

	function setActive(state) {
		if (state == true) {
			grid.classList.add('active');
		} else {
			grid.classList.remove('active');
		}
	}

	return {
		get DOMObject() {
			return gameboardUI;
		},

		setupGridOnclickCallback,
		revealGrid,
		updateGrid,
		setActive,
	};
}

function makeGameboardUI() {
	const gameboard = document.createElement('div');
	gameboard.classList.add('gameboard');

	const aCharCode = 'a'.charCodeAt(0);
	for (let col = 0; col < 10; ++col) {
		const markupElement = document.createElement('span');
		markupElement.textContent = String.fromCharCode(aCharCode + col);
		markupElement.classList.add('gameboard-markup');
		markupElement.style.gridRow = 1;
		markupElement.style.gridColumn = `${col + 2}`;
		gameboard.appendChild(markupElement);
	}
	for (let row = 0; row < 10; ++row) {
		const markupElement = document.createElement('span');
		markupElement.textContent = `${row + 1}`;
		markupElement.classList.add('gameboard-markup');
		markupElement.style.gridColumn = 1;
		markupElement.style.gridRow = `${row + 2}`;
		gameboard.appendChild(markupElement);
	}

	return gameboard;
}

function makeGameboardGrid() {
	const grid = document.createElement('div');
	grid.classList.add('gameboard-grid');

	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			const cell = document.createElement('div');
			cell.classList.add('gameboard-grid-cell');
			cell.style.gridRow = row + 1;
			cell.style.gridColumn = col + 1;

			grid.appendChild(cell);
		}
	}

	return grid;
}

export { makeGameboardGrid, makeGameboardUI };
