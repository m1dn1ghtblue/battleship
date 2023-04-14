import '../styles/setup.scss';

import Game from './game/game';
import Player from './game/player';

export default async function setupGame(setupContainer) {
	const playerOne = await setupPlayerOne(setupContainer);
	const playerTwo = await setupPlayerTwo(setupContainer);

	randomPlacement(playerOne);
	randomPlacement(playerTwo);

	const game = new Game(playerOne, playerTwo);
	return game;
}

const setupPlayerOne = (setupContainer) =>
	new Promise((resolve) => {
		const defaultName = 'Player 1';

		const display = makeDisplay(setupContainer);

		const nameInput = makeInput(defaultName);
		display.appendChild(makeLabel(nameInput));

		display.appendChild(
			makeButton('Next player', () => {
				const name = nameInput.value.length > 0 ? nameInput.value : defaultName;
				const player = new Player(name);
				display.remove();
				resolve(player);
			})
		);
	});

const setupPlayerTwo = (setupContainer) =>
	new Promise((resolve) => {
		const defaultName = 'Player 2';
		const display = makeDisplay(setupContainer);

		const nameInput = makeInput(defaultName);
		display.appendChild(makeLabel(nameInput));

		display.appendChild(
			makeButton('Play', () => {
				const name = nameInput.value.length > 0 ? nameInput.value : defaultName;
				const player = new Player(name);
				display.remove();
				resolve(player);
			})
		);
	});

function makeDisplay(setupContainer) {
	const setupDisplay = document.createElement('div');
	setupDisplay.classList.add('setup-display');
	setupContainer.appendChild(setupDisplay);
	return setupDisplay;
}

function makeInput(placeholder) {
	const nameInput = document.createElement('input');
	nameInput.setAttribute('autocomplete', 'off');
	nameInput.setAttribute('maxlength', '24');
	nameInput.setAttribute('placeholder', placeholder);
	return nameInput;
}

function makeLabel(input) {
	const label = document.createElement('label');
	label.textContent = 'Player name: ';
	label.appendChild(input);
	return label;
}

function makeButton(text, callback) {
	const button = document.createElement('button');
	button.textContent = text;
	button.addEventListener('click', callback);
	return button;
}

function randomPlacement(player) {
	const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

	while (shipSizes.length > 0) {
		try {
			player.gameboard.placeShip(
				[getRandomInt(10), getRandomInt(10)],
				shipSizes[0],
				getRandomInt(2) ? 'horizontal' : 'vertical'
			);
			shipSizes.shift();
		} catch (e) {}
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
