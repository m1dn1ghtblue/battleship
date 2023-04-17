'use strict';

import '../styles/gameUI.scss';
import GameboardUI from './gameboardUI.js';

export default function playGame(game, isAI, gameContainer, onGameOverCalback) {
	const display = new Display();
	gameContainer.appendChild(display.DOMObject);

	display.setPlayerOneName(game.playerOne.name);
	display.setPlayerTwoName(game.playerTwo.name);

	const playerOneGameboardUI = new GameboardUI(game.playerOne.gameboard);
	const playerTwoGameboardUI = new GameboardUI(game.playerTwo.gameboard);

	display.playerOneGameboardContainer.appendChild(playerOneGameboardUI.DOMObject);
	display.playerTwoGameboardContainer.appendChild(playerTwoGameboardUI.DOMObject);

	playerTwoGameboardUI.setupGridOnclickCallback(takePlayerOneTurn);

	playerOneGameboardUI.revealGrid();
	playerTwoGameboardUI.revealGrid();

	if (isAI) {
		playerOneGameboardUI.revealGrid();
	} else {
		playerOneGameboardUI.setupGridOnclickCallback(takePlayerTwoTurn);
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
		playerOneGameboardUI.updateGrid();
		playerTwoGameboardUI.updateGrid();

		if (game.isGameOver) {
			gameOver();
		} else {
			updateActivePlayer();
			if (isAI && game.activePlayer === game.playerTwo) {
				takeAITurn();
			}
		}
	}

	function updateActivePlayer() {
		playerOneGameboardUI.setActive(game.activePlayer !== game.playerOne);
		playerTwoGameboardUI.setActive(game.activePlayer === game.playerOne);
	}

	function gameOver() {
		playerOneGameboardUI.setActive(false);
		playerTwoGameboardUI.setActive(false);

		playerOneGameboardUI.revealGrid();
		playerTwoGameboardUI.revealGrid();

		display.showWinner(game.activePlayer.name);

		const newGameButton = document.createElement('button');
		newGameButton.classList.add('new-game-btn');
		newGameButton.textContent = 'New game';
		newGameButton.addEventListener('click', () => {
			display.remove();
			onGameOverCalback();
		});

		display.addButton(newGameButton);
	}
}

function Display() {
	const gameDisplay = document.createElement('div');
	gameDisplay.classList.add('game');

	const playerOneSide = makePlayerSide();
	gameDisplay.appendChild(playerOneSide);

	const playerTwoSide = makePlayerSide();
	gameDisplay.appendChild(playerTwoSide);

	const playerOneNameLabel = makeNameLabel();
	playerOneSide.appendChild(playerOneNameLabel);
	const playerTwoNameLabel = makeNameLabel();
	playerTwoSide.appendChild(playerTwoNameLabel);

	const _playerOneGameboardContainer = makeGameboardContainer();
	playerOneSide.appendChild(_playerOneGameboardContainer);

	const _playerTwoGameboardContainer = makeGameboardContainer();
	playerTwoSide.appendChild(_playerTwoGameboardContainer);

	function showWinner(winnerName) {
		const winnerLabel = document.createElement('h2');
		winnerLabel.classList.add('winner-label');
		winnerLabel.textContent = `${winnerName} wins!`;
		gameDisplay.appendChild(winnerLabel);
	}

	function addButton(button) {
		gameDisplay.appendChild(button);
	}

	function remove() {
		gameDisplay.remove();
	}

	return {
		get DOMObject() {
			return gameDisplay;
		},
		get playerOneGameboardContainer() {
			return _playerOneGameboardContainer;
		},
		get playerTwoGameboardContainer() {
			return _playerTwoGameboardContainer;
		},

		setPlayerOneName: function (name) {
			playerOneNameLabel.textContent = name;
		},
		setPlayerTwoName: function (name) {
			playerTwoNameLabel.textContent = name;
		},

		showWinner,
		addButton,
		remove,
	};
}

function makePlayerSide() {
	const playerSide = document.createElement('div');
	playerSide.classList.add('player-side');
	return playerSide;
}

function makeNameLabel() {
	const label = document.createElement('h3');
	label.classList.add('player-name');
	return label;
}

function makeGameboardContainer() {
	const container = document.createElement('div');
	container.classList.add('gameboard-container');
	return container;
}
