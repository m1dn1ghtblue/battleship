'use strict';

import '../styles/index.scss';
import setupGame from './setup.js';
import GameUI from './gameUI';

const setupContainer = document.getElementById('setup-container');
const gameContainer = document.getElementById('game-container');

setupContainer.classList.add('active');
setupGame(setupContainer).then((game) => {
	setupContainer.classList.remove('active');
	gameContainer.classList.add('active');

	GameUI(game, gameContainer);
});
