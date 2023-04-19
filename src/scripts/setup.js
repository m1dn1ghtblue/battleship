import '../styles/setup.scss';
import '../styles/gameboardUI.scss';

import Game from './game/game';
import Player from './game/player';
import GameboardEditor from './gameboardEditor.js';

export default function setup(setupContainer, onSetupCallback) {
	let playerOne = null,
		playerTwo = null;
	let isAI;

	setupPlayerOne();

	function setupPlayerOne() {
		const defaultName = 'Player 1';
		const display = new Display();
		setupContainer.appendChild(display.DOMObject);

		display.nameInput.setAttribute('placeholder', defaultName);

		const randomPlacementBtn = makeButton('Place random', () => {
			display.editor.placeRandom();
		});
		display.addButton(randomPlacementBtn);

		const nextPlayerBtn = makeButton('Next player', () => {
			const name = display.nameInput.value ? display.nameInput.value : defaultName;
			playerOne = new Player(name);
			display.editor.setGameboard(playerOne.gameboard);

			display.remove();
			setupPlayerTwo();
		});

		display.addButton(nextPlayerBtn);

		const playWithAIBtn = makeButton('Play with AI', () => {
			const name = display.nameInput.value ? display.nameInput.value : defaultName;
			playerOne = new Player(name);
			display.editor.placeRandom();
			display.editor.setGameboard(playerOne.gameboard);

			playerTwo = new Player('AI');
			randomPlacement(playerTwo.gameboard);

			display.remove();
			isAI = true;

			finishSetup();
		});

		display.addButton(playWithAIBtn);
	}

	function setupPlayerTwo() {
		const defaultName = 'Player 2';
		const display = new Display();
		setupContainer.appendChild(display.DOMObject);

		display.nameInput.setAttribute('placeholder', defaultName);

		const randomPlacementBtn = makeButton('Place random', () => {
			display.editor.placeRandom();
		});
		display.addButton(randomPlacementBtn);

		const playBtn = makeButton('Play', () => {
			const name = display.nameInput.value ? display.nameInput.value : defaultName;
			playerTwo = new Player(name);
			display.editor.setGameboard(playerTwo.gameboard);

			display.remove();
			isAI = false;

			finishSetup();
		});

		display.addButton(playBtn);
	}

	function finishSetup() {
		const game = new Game(playerOne, playerTwo);
		onSetupCallback(game, isAI);
	}
}

function Display() {
	const display = document.createElement('div');
	display.classList.add('setup-display');

	const editorContainer = document.createElement('div');
	editorContainer.classList.add('editor-container');
	display.appendChild(editorContainer);

	const gameboardEditor = new GameboardEditor();
	editorContainer.appendChild(gameboardEditor.DOMObject);

	const buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons-container');
	display.appendChild(buttonsContainer);

	const input = makeInput();
	const label = makeLabel();
	label.appendChild(input);
	display.appendChild(label);

	function addButton(button) {
		buttonsContainer.appendChild(button);
	}

	function remove() {
		display.remove();
	}

	return {
		get DOMObject() {
			return display;
		},
		get editor() {
			return gameboardEditor;
		},
		get nameInput() {
			return input;
		},

		addButton,
		remove,
	};
}

function makeLabel() {
	const label = document.createElement('label');
	label.textContent = 'Player name: ';
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

function randomPlacement(gameboard) {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const shipsToPlace = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

	while (shipsToPlace.length > 0) {
		try {
			gameboard.placeShip(
				[getRandomInt(10), getRandomInt(10)],
				shipsToPlace[0],
				getRandomInt(2) ? 'horizontal' : 'vertical'
			);
			shipsToPlace.shift();
		} catch (e) {}
	}
}
