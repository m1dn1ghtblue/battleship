'use strict';

import '../styles/gameUI.scss';

export default function GameUI(game, gameContainer) {
	const gameState = game;

	const gameDisplay = document.createElement('div');
	gameDisplay.classList.add('game');
	gameContainer.appendChild(gameDisplay);

	const playerOneSide = document.createElement('div');
	playerOneSide.classList.add('player-side');
	gameDisplay.appendChild(playerOneSide);
	const playerTwoSide = document.createElement('div');
	playerTwoSide.classList.add('player-side');
	gameDisplay.appendChild(playerTwoSide);

	const playerOneName = document.createElement('h3');
	playerOneName.classList.add('player-name');
	playerOneName.textContent = gameState.playerOne.name;
	playerOneSide.appendChild(playerOneName);

	const playerTwoName = document.createElement('h3');
	playerTwoName.classList.add('player-name');
	playerTwoName.textContent = gameState.playerTwo.name;
	playerTwoSide.appendChild(playerTwoName);

	const playerOneGameboardContainer = document.createElement('div');
	playerOneGameboardContainer.classList.add('gameboard-container');
	playerOneSide.appendChild(playerOneGameboardContainer);

	const playerTwoGameboardContainer = document.createElement('div');
	playerTwoGameboardContainer.classList.add('gameboard-container');
	playerTwoSide.appendChild(playerTwoGameboardContainer);

	const playerOneGrid = makeGameboardGrid(gameState.playerOne.gameboard, takePlayerTwoTurn);
	const playerTwoGrid = makeGameboardGrid(gameState.playerTwo.gameboard, takePlayerOneTurn);

	const playerOneGameboard = makeGameboard(playerOneGrid);
	const playerTwoGameboard = makeGameboard(playerTwoGrid);

	playerOneGameboardContainer.appendChild(playerOneGameboard);
	playerTwoGameboardContainer.appendChild(playerTwoGameboard);

	updateActivePlayer();

	function takePlayerOneTurn(row, col) {
		if (gameState.activePlayer === gameState.playerOne) {
			try {
				gameState.takeTurn([row, col]);
				updateGrid(playerTwoGrid, gameState.playerTwo.gameboard);
				updateActivePlayer();
			} catch (error) {
				console.error(error);
			}
		}
	}

	function takePlayerTwoTurn(row, col) {
		if (gameState.activePlayer === gameState.playerTwo) {
			try {
				gameState.takeTurn([row, col]);
				updateGrid(playerOneGrid, gameState.playerOne.gameboard);
				updateActivePlayer();
			} catch (error) {
				console.error(error);
			}
		}
	}

	function updateActivePlayer() {
		if (gameState.activePlayer === gameState.playerOne) {
			playerOneGrid.classList.remove('active');
			playerTwoGrid.classList.add('active');
		} else {
			playerOneGrid.classList.add('active');
			playerTwoGrid.classList.remove('active');
		}
	}
}

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

function updateGrid(grid, gameboard) {
	const cells = grid.childNodes;
	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			const cell = cells[row * 10 + col];
			if (gameboard.getCell([row, col]).isHit) {
				cell.classList.add('hit');
			}
		}
	}
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
