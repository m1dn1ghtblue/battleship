'use strict';

import '../styles/gameUI.scss';
import { makeGameboard, makeGameboardGrid } from './gameboardUI.js';

export default function playGame(game, isAI, gameContainer, onGameOverCalback) {
	const gameDisplay = document.createElement('div');
	gameDisplay.classList.add('game');
	gameContainer.appendChild(gameDisplay);

	const playerOneSide = makePlayerSide();
	gameDisplay.appendChild(playerOneSide);

	const playerTwoSide = makePlayerSide();
	gameDisplay.appendChild(playerTwoSide);

	playerOneSide.appendChild(makeNameLabel(game.playerOne.name));
	playerTwoSide.appendChild(makeNameLabel(game.playerTwo.name));

	const playerOneGameboardContainer = makeGameboardContainer();
	playerOneSide.appendChild(playerOneGameboardContainer);

	const playerTwoGameboardContainer = makeGameboardContainer();
	playerTwoSide.appendChild(playerTwoGameboardContainer);

	const playerOneGrid = makeGameboardGrid();
	const playerTwoGrid = makeGameboardGrid();

	const playerOneGameboard = makeGameboard(playerOneGrid);
	const playerTwoGameboard = makeGameboard(playerTwoGrid);

	playerOneGameboardContainer.appendChild(playerOneGameboard);
	playerTwoGameboardContainer.appendChild(playerTwoGameboard);

	setupGridCallback(playerTwoGrid, takePlayerOneTurn);

	if (isAI) {
		revealGrid(playerOneGrid, game.playerOne.gameboard);
	} else {
		setupGridCallback(playerOneGrid, takePlayerTwoTurn);
	}

	updateActivePlayer();

	function takePlayerOneTurn(row, col) {
		if (game.activePlayer === game.playerOne) {
			try {
				game.takeTurn([row, col]);
				endTurn();
			} catch (error) {
				console.error(error);
			}
		}
	}

	function takePlayerTwoTurn(row, col) {
		if (game.activePlayer === game.playerTwo) {
			try {
				game.takeTurn([row, col]);
				endTurn();
			} catch (error) {
				console.error(error);
			}
		}
	}

	async function takeAITurn() {
		await new Promise((resolve) =>
			setTimeout(() => {
				game.takeAITurn();
				resolve();
			}, 400)
		);
		endTurn();
	}

	function endTurn() {
		updateGrid(playerOneGrid, game.playerOne.gameboard);
		updateGrid(playerTwoGrid, game.playerTwo.gameboard);

		if (game.isGameOver) {
			gameOver();
		} else {
			updateActivePlayer();
		}
	}

	function updateActivePlayer() {
		if (game.activePlayer === game.playerOne) {
			playerOneGrid.classList.remove('active');
			playerTwoGrid.classList.add('active');
		} else {
			playerOneGrid.classList.add('active');
			playerTwoGrid.classList.remove('active');
			if (isAI) {
				takeAITurn();
			}
		}
	}

	function gameOver() {
		playerOneGrid.classList.remove('active');
		playerTwoGrid.classList.remove('active');

		revealGrid(playerOneGrid, game.playerOne.gameboard);
		revealGrid(playerTwoGrid, game.playerTwo.gameboard);

		const winnerLabel = document.createElement('h2');
		winnerLabel.classList.add('winner-label');
		winnerLabel.textContent = `${game.activePlayer.name} wins!`;
		gameDisplay.appendChild(winnerLabel);

		const newGameButton = document.createElement('button');
		newGameButton.classList.add('new-game-btn');
		newGameButton.textContent = 'New game';
		gameDisplay.appendChild(newGameButton);

		newGameButton.addEventListener('click', () => {
			gameDisplay.remove();
			onGameOverCalback();
		});
	}
}

function makePlayerSide() {
	const playerSide = document.createElement('div');
	playerSide.classList.add('player-side');
	return playerSide;
}

function makeNameLabel(name) {
	const label = document.createElement('h3');
	label.classList.add('player-name');
	label.textContent = name;
	return label;
}

function makeGameboardContainer() {
	const container = document.createElement('div');
	container.classList.add('gameboard-container');
	return container;
}

function setupGridCallback(gameboardGrid, callback) {
	const cells = gameboardGrid.childNodes;
	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			const UIcell = cells[row * 10 + col];
			UIcell.addEventListener('click', () => callback(row, col));
		}
	}
}

function updateGrid(grid, gameboard) {
	const cells = grid.childNodes;
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

function revealGrid(grid, gameboard) {
	const cells = grid.childNodes;
	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			if (gameboard.getCell([row, col]).ship != null) {
				cells[row * 10 + col].classList.add('revealed');
			}
		}
	}
}
