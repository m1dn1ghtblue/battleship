import Gameboard from './gameboard.js';

const MAX_NAME_LENGTH = 32;

export default function Player(name) {
	_validateName(name);
	const _name = name;
	const _gameboard = new Gameboard();

	function _validateName(name) {
		if (!name || typeof name != 'string' || name.length > MAX_NAME_LENGTH) {
			throw Error(
				`Inavlid player name: ${name}. Player name must be string not longer than ${MAX_NAME_LENGTH} charachters`
			);
		}
	}
	return {
		get name() {
			return _name;
		},

		get gameboard() {
			return _gameboard;
		},
	};
}
