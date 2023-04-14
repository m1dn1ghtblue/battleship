'use strict';

import Game from './game/game.js';
import Player from './game/player.js';
import '../styles/gameboard.scss';

export default function GameUI(game) {
	const gameState = game;

	return {};
}

function makeGameboard(playerGameboard) {
	const gameboard = document.createElement('div');
	gameboard.classList.add('gameboard');

	const aCharCode = 'a'.charCodeAt(0);
	for (let col = 0; col < 10; ++col) {
		const markupElement = document.createElement('span');
		markupElement.textContent = String.fromCharCode(aCharCode + col);
		markupElement.classList.add('gameboard-markup');
		markupElement.style.gridRow('1');
		markupElement.style.gridColumn(`${col + 2}`);
		gameboard.appendChild(markupElement);
	}
	for (let row = 0; row < 10; ++row) {
		const markupElement = document.createElement('span');
		markupElement.textContent = `${row + 1}`;
		markupElement.classList.add('gameboard-markup');
		markupElement.style.gridColumn('1');
		markupElement.style.gridRow(`${row + 2}`);
		gameboard.appendChild(markupElement);
	}

	gameboard.appendChild(makeGameboardGrid(playerGameboard));

	return gameboard;
}

function makeGameboardGrid(playerGameboard) {
	const grid = document.createElement('div');
	grid.classList.add('gameboard-grid');

	for (let row = 0; row < 10; ++row) {
		for (let col = 0; col < 10; ++col) {
			const cell = document.createElement('div');
			cell.classList.add('gameboard-grid-cell');
			if (playerGameboard.getCell([col, row]).ship != null) {
				cell.classList.add('ship');
			}
			cell.style.gridRow = row;
			cell.style.gridColumn = col;
			grid.appendChild(cell);
		}
	}

	return grid;
}
