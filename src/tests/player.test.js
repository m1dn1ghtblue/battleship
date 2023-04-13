import Gameboard from '../scripts/game/gameboard.js';
import Player from '../scripts/game/player.js';

describe('Player factory function', () => {
	test('Player factory should return object with required properties', () => {
		const player = new Player('playername');

		expect(player).toHaveProperty('name');
		expect(player).toHaveProperty('gameboard');
	});

	test('Player object should have name property set at initialization', () => {
		const Alice = new Player('Alice');
		const Bob = new Player('Bob');

		expect(Alice.name).toEqual('Alice');
		expect(Bob.name).toEqual('Bob');
	});
});
