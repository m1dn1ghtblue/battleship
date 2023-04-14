import Game from '../scripts/game/game.js';
import Player from '../scripts/game/player.js';

describe('Game factory function', () => {
	test('Function should return object with required properties', () => {
		const game = new Game(new Player('Alice'), new Player('Bob'));

		expect(game).toHaveProperty('isGameOver');
		expect(game).toHaveProperty('isPlayerOneTurn');
		expect(game).toHaveProperty('takePlayerOneTurn');
		expect(game).toHaveProperty('takePlayerTwoTurn');
	});

	test('Game object should switch activePlayer after each turn', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.isPlayerOneTurn).toBe(true);

		game.takePlayerOneTurn([5, 5]);

		expect(game.isPlayerOneTurn).toBe(false);

		game.takePlayerTwoTurn([4, 4]);

		expect(game.isPlayerOneTurn).toBe(true);
	});

	test('Game object should throw on takePlayerOneTurn when isPlayerOneTurn is false and vice versa', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(() => game.takePlayerTwoTurn([2, 2])).toThrow();

		game.takePlayerOneTurn([2, 2]);

		expect(() => game.takePlayerOneTurn([3, 3])).toThrow;
	});

	test('Game object should report when game is over', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.isGameOver).toBe(false);

		game.takePlayerOneTurn([0, 1]);

		expect(game.isGameOver).toBe(false);

		game.takePlayerTwoTurn([0, 0]);

		expect(game.isGameOver).toBe(true);
	});

	test('Game object should not switch active player after a ship is hit', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 3, 'horizontal');
		player2.gameboard.placeShip([0, 0], 3, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.isPlayerOneTurn).toBe(true);

		game.takePlayerOneTurn([0, 0]);

		expect(game.isPlayerOneTurn).toBe(true);

		game.takePlayerOneTurn([1, 0]);

		expect(game.isPlayerOneTurn).toBe(false);

		game.takePlayerTwoTurn([0, 0]);

		expect(game.isPlayerOneTurn).toBe(false);

		game.takePlayerTwoTurn([0, 1]);

		expect(game.isPlayerOneTurn).toBe(false);

		game.takePlayerTwoTurn([0, 2]);

		expect(game.isPlayerOneTurn).toBe(false);
	});

	test('Game object should not switch active player after turn that has thrown an error', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.isPlayerOneTurn).toBe(true);

		game.takePlayerOneTurn([-1, 0]);

		expect(game.isPlayerOneTurn).toBe(true);

		game.takePlayerOneTurn([5, 5]);

		expect(game.isPlayerOneTurn).toBe(false);

		game.takePlayerTwoTurn([2, 2]);

		expect(game.isPlayerOneTurn).toBe(true);

		game.takePlayerOneTurn([5, 5]);

		expect(game.isPlayerOneTurn).toBe(true);
	});
});
