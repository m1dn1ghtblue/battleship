'use strict';

import '../styles/gameUI.scss';
import { makeGameboard, makeGameboardGrid } from './gameboardUI.js';

export default function playGame(game, isAI, gameContainer, onGameOverCalback) {
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

	const playerOneGrid = makeGameboardGrid(gameState.playerOne.gameboard, isAI ? () => {} : takePlayerTwoTurn);
	const playerTwoGrid = makeGameboardGrid(gameState.playerTwo.gameboard, takePlayerOneTurn);

	const playerOneGameboard = makeGameboard(playerOneGrid);
	const playerTwoGameboard = makeGameboard(playerTwoGrid);

	playerOneGameboardContainer.appendChild(playerOneGameboard);
	playerTwoGameboardContainer.appendChild(playerTwoGameboard);

	if (isAI) {
		revealGrid(playerOneGrid);
	}
	updateActivePlayer();

	function takePlayerOneTurn(row, col) {
		if (gameState.activePlayer === gameState.playerOne) {
			try {
				gameState.takeTurn([row, col]);
				updateGrid(playerTwoGrid, gameState.playerTwo.gameboard);
				endTurn();
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
				endTurn();
			} catch (error) {
				console.error(error);
			}
		}
	}

	async function takeAITurn() {
		await new Promise((resolve) =>
			setTimeout(() => {
				gameState.takeAITurn();
				resolve();
			}, 400)
		);
		updateGrid(playerOneGrid, gameState.playerOne.gameboard);
		endTurn();
	}

	function endTurn() {
		if (gameState.isGameOver) {
			gameOver();
		} else {
			updateActivePlayer();
		}
	}

	function updateActivePlayer() {
		if (gameState.activePlayer === gameState.playerOne) {
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

		revealGrid(playerOneGrid);
		revealGrid(playerTwoGrid);

		const winnerLabel = document.createElement('h2');
		winnerLabel.classList.add('winner-label');
		winnerLabel.textContent = `${gameState.activePlayer.name} wins!`;
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

function revealGrid(grid) {
	grid.classList.add('revealed');
}
