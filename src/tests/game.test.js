import Game from '../scripts/game/game.js';
import Player from '../scripts/game/player.js';

describe('Game factory function', () => {
	test('Function should return object with required properties', () => {
		const game = new Game(new Player('Alice'), new Player('Bob'));

		expect(game).toHaveProperty('isGameOver');
		expect(game).toHaveProperty('activePlayer');
		expect(game).toHaveProperty('playerOne');
		expect(game).toHaveProperty('playerTwo');
		expect(game).toHaveProperty('takeTurn');
	});

	test('Game object should provide acess to player objects set at initialization', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		const game = new Game(player1, player2);

		expect(game.playerOne).toBe(player1);
		expect(game.playerTwo).toBe(player2);
	});

	test('Game object should switch activePlayer after each turn', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.activePlayer).toBe(player1);

		game.takeTurn([5, 5]);

		expect(game.activePlayer).toBe(player2);

		game.takeTurn([4, 4]);

		expect(game.activePlayer).toBe(player1);
	});

	test('Game object should report when game is over', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.isGameOver).toBe(false);

		game.takeTurn([0, 1]);

		expect(game.isGameOver).toBe(false);

		game.takeTurn([0, 0]);

		expect(game.isGameOver).toBe(true);
	});

	test('Game object should not switch active player after a ship is hit', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 3, 'horizontal');
		player2.gameboard.placeShip([0, 0], 3, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.activePlayer).toBe(player1);

		game.takeTurn([0, 0]);

		expect(game.activePlayer).toBe(player1);

		game.takeTurn([1, 0]);

		expect(game.activePlayer).toBe(player2);

		game.takeTurn([0, 0]);

		expect(game.activePlayer).toBe(player2);

		game.takeTurn([0, 1]);

		expect(game.activePlayer).toBe(player2);

		game.takeTurn([0, 2]);

		expect(game.activePlayer).toBe(player2);
	});

	test('Game object should not switch active player after turn that has thrown an error', () => {
		const player1 = new Player('Alice');
		const player2 = new Player('Bob');
		player1.gameboard.placeShip([0, 0], 1, 'horizontal');
		player2.gameboard.placeShip([0, 0], 1, 'horizontal');
		const game = new Game(player1, player2);

		expect(game.activePlayer).toBe(player1);

		game.takeTurn([-1, 0]);

		expect(game.activePlayer).toBe(player1);

		game.takeTurn([5, 5]);

		expect(game.activePlayer).toBe(player2);

		game.takeTurn([2, 2]);

		expect(game.activePlayer).toBe(player1);

		game.takeTurn([5, 5]);

		expect(game.activePlayer).toBe(player1);
	});
});
