import '../styles/gameboardUI.scss';

function makeGameboard(grid) {
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

	gameboard.appendChild(grid);

	return gameboard;
}

function makeGameboardGrid(playerGameboard, onclickCallback) {
	const grid = document.createElement('div');
	grid.classList.add('gameboard-grid');

	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			const cell = document.createElement('div');
			cell.classList.add('gameboard-grid-cell');
			if (playerGameboard.getCell([row, col]).ship != null) {
				cell.classList.add('ship');
			}
			cell.style.gridRow = row + 1;
			cell.style.gridColumn = col + 1;

			cell.addEventListener('click', () => {
				onclickCallback(row, col);
			});

			grid.appendChild(cell);
		}
	}

	return grid;
}

export { makeGameboard, makeGameboardGrid };
