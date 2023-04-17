import { makeGameboardGrid, makeGameboardUI } from './gameboardUI.js';

const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export default function GameboardEditor() {
	const grid = makeGameboardGrid();
	const gameboardUI = makeGameboardUI();
	gameboardUI.appendChild(grid);

	function setGameboard(gameboard) {
		throw Error('setGameboard Not implemented');
	}

	return {
		get DOMObject() {
			return gameboardUI;
		},

		setGameboard,
	};
}
