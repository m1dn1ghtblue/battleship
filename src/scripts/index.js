'use strict';

import '../styles/index.scss';
import GameUI from './gameUI.js';
import Player from './game/player.js';
import Game from './game/game.js';

const playerOneGameboardContainer = document.getElementById('player-one-gameboard-container');
const playerTwoGameboardContainer = document.getElementById('player-two-gameboard-container');

const player1 = new Player('Alice');
const player2 = new Player('Bob');
player1.gameboard.placeShip([3, 3], 3, 'horizontal');
player2.gameboard.placeShip([2, 4], 4, 'vertical');

const game = new Game(player1, player2);
const gameUI = new GameUI(game);

playerOneGameboardContainer.appendChild(gameUI.playerOneGameboard);
playerTwoGameboardContainer.appendChild(gameUI.playerTwoGameboard);
