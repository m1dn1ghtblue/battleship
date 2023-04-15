'use strict';

import '../styles/index.scss';
import setupGame from './setup.js';
import playGame from './gameUI';

const setupContainer = document.getElementById('setup-container');
const gameContainer = document.getElementById('game-container');

gameLoop();

function gameLoop() {
	setupContainer.classList.add('active');
	setupGame(setupContainer, (game, isAI) => {
		setupContainer.classList.remove('active');
		gameContainer.classList.add('active');
		playGame(game, isAI, gameContainer, () => {
			gameContainer.classList.remove('active');
			gameLoop();
		});
	});
}
