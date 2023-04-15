import '../styles/setup.scss';
import '../styles/gameboardUI.scss';

import Game from './game/game';
import Player from './game/player';

export default function setup(setupContainer, onSetupCallback) {
	let playerOne = null,
		playerTwo = null;

	setupPlayerOne();

	function setupPlayerOne() {
		const defaultName = 'Player 1';
		const display = makeDisplay(setupContainer);
		const nameInput = makeInput(defaultName);
		display.appendChild(makeLabel(nameInput));

		const nextPlayerBtn = makeButton('Next player', () => {
			const name = nameInput.value.length > 0 ? nameInput.value : defaultName;
			playerOne = new Player(name);
			randomPlacement(playerOne);

			display.remove();
			setupPlayerTwo();
		});
		display.appendChild(nextPlayerBtn);

		const playWithAIBtn = makeButton('Play with AI', () => {
			const name = nameInput.value.length > 0 ? nameInput.value : defaultName;
			playerOne = new Player(name);
			randomPlacement(playerOne);

			playerTwo = new Player('AI');
			randomPlacement(playerTwo);
			display.remove();

			startGame(true);
		});
		display.appendChild(playWithAIBtn);
	}

	function setupPlayerTwo() {
		const defaultName = 'Player 2';
		const display = makeDisplay(setupContainer);
		const nameInput = makeInput(defaultName);
		display.appendChild(makeLabel(nameInput));

		const playBtn = makeButton('Play', () => {
			const name = nameInput.value.length > 0 ? nameInput.value : defaultName;
			playerTwo = new Player(name);
			randomPlacement(playerTwo);

			display.remove();

			startGame(false);
		});

		display.appendChild(playBtn);
	}

	function startGame(isAI) {
		const game = new Game(playerOne, playerTwo);
		onSetupCallback(game, isAI);
	}
}

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

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

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
