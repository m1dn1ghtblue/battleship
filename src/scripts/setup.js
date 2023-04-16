import '../styles/setup.scss';
import '../styles/gameboardUI.scss';

import Game from './game/game';
import Player from './game/player';
import { makeGameboard, makeGameboardGrid } from './gameboardUI.js';
import playGame from './gameUI';

const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export default function setup(setupContainer, onSetupCallback) {
	let playerOne = null,
		playerTwo = null;
	let isAI;

	setupPlayerOne();

	function setupPlayerOne() {
		const defaultName = 'Player 1';
		const display = makeDisplay();
		setupContainer.appendChild(display);

		const input = document.getElementById('name-input');
		input.setAttribute('placeholder', defaultName);

		const nextPlayerBtn = makeButton('Next player', () => {
			const name = input.value;
			playerOne = new Player(name ? name : defaultName);
			randomPlacement(playerOne);
			display.remove();
			isAI = false;

			setupPlayerTwo();
		});

		document.querySelector('.buttons-container').appendChild(nextPlayerBtn);

		const playWithAIBtn = makeButton('Play with AI', () => {
			const name = input.value;
			playerOne = new Player(name ? name : defaultName);
			randomPlacement(playerOne);

			playerTwo = new Player('AI');
			randomPlacement(playerTwo);
			display.remove();
			isAI = true;

			finishSetup();
		});

		document.querySelector('.buttons-container').appendChild(playWithAIBtn);
	}

	function setupPlayerTwo() {
		const defaultName = 'Player 2';
		const display = makeDisplay();
		setupContainer.appendChild(display);

		const input = document.getElementById('name-input');
		input.setAttribute('placeholder', defaultName);

		const playBtn = makeButton('Play', () => {
			const name = input.value;
			playerTwo = new Player(name ? name : defaultName);
			randomPlacement(playerTwo);
			display.remove();

			finishSetup();
		});

		document.querySelector('.buttons-container').appendChild(playBtn);
	}

	function finishSetup() {
		const game = new Game(playerOne, playerTwo);
		onSetupCallback(game, isAI);
	}
}

function makeDisplay() {
	const display = document.createElement('div');
	display.classList.add('setup-display');

	const gameboardSetupContainer = document.createElement('div');
	gameboardSetupContainer.classList.add('gameboard-setup');
	display.appendChild(gameboardSetupContainer);

	const gameboardContainer = document.createElement('div');
	gameboardContainer.classList.add('gameboard-container');
	gameboardSetupContainer.appendChild(gameboardContainer);

	const grid = makeGameboardGrid();
	const gameboard = makeGameboard(grid);
	gameboardContainer.appendChild(gameboard);

	gameboardSetupContainer.appendChild(makeShipsContainer());

	const buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons-container');
	display.appendChild(buttonsContainer);

	display.appendChild(makeLabel());

	return display;
}

function makeShipsContainer() {
	const shipsContainer = document.createElement('div');
	shipsContainer.classList.add('ships-container');

	return shipsContainer;
}

function makeLabel() {
	const label = document.createElement('label');
	label.textContent = 'Player name: ';
	label.appendChild(makeInput());
	return label;
}

function makeInput() {
	const nameInput = document.createElement('input');
	nameInput.id = 'name-input';
	nameInput.setAttribute('autocomplete', 'off');
	nameInput.setAttribute('maxlength', '24');
	return nameInput;
}

function makeButton(text, callback) {
	const button = document.createElement('button');
	button.textContent = text;
	button.addEventListener('click', callback);
	return button;
}

function randomPlacement(player) {
	const shipsToPlace = shipSizes.slice();

	while (shipsToPlace.length > 0) {
		try {
			player.gameboard.placeShip(
				[getRandomInt(10), getRandomInt(10)],
				shipsToPlace[0],
				getRandomInt(2) ? 'horizontal' : 'vertical'
			);
			shipsToPlace.shift();
		} catch (e) {}
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
