import Gameboard from '../scripts/game/gameboard.js';

describe('Gameboard factory function', () => {
	test('Function should return object with required properties', () => {
		const gameboard = new Gameboard();

		expect(gameboard).toHaveProperty('placeShip');
		expect(gameboard).toHaveProperty('receiveAttack');
		expect(gameboard).toHaveProperty('getCell');
		expect(gameboard).toHaveProperty('isGameOver');
	});

	test('Gameboard object should have getCell method that returns data about cell content', () => {
		const gameboard = new Gameboard();
		expect(gameboard.getCell([0, 0])).toHaveProperty('ship');
		expect(gameboard.getCell([0, 0])).toHaveProperty('isHit');
		expect(gameboard.getCell([0, 0]).ship).toBeDefined();
	});

	test('Gameboard object should have placeShip method that creates ship with given length on given coordinates', () => {
		const gameboard = new Gameboard();
		gameboard.placeShip([7, 9], 1, 'horizontal');
		gameboard.placeShip([2, 3], 4, 'horizontal');
		gameboard.placeShip([4, 4], 3, 'vertical');
		gameboard.placeShip([0, 0], 2, 'vertical');

		expect(gameboard.getCell([7, 9]).ship).not.toBeNull();

		expect(gameboard.getCell([2, 3]).ship).not.toBeNull();
		expect(gameboard.getCell([2, 4]).ship).not.toBeNull();
		expect(gameboard.getCell([2, 5]).ship).not.toBeNull();
		expect(gameboard.getCell([2, 6]).ship).not.toBeNull();
		expect(gameboard.getCell([2, 3]).ship).toBe(gameboard.getCell([2, 6]).ship);

		expect(gameboard.getCell([4, 4]).ship).not.toBeNull();
		expect(gameboard.getCell([5, 4]).ship).not.toBeNull();
		expect(gameboard.getCell([6, 4]).ship).not.toBeNull();
		expect(gameboard.getCell([4, 4]).ship).toBe(gameboard.getCell([6, 4]).ship);

		expect(gameboard.getCell([0, 0]).ship).toBe(gameboard.getCell([1, 0]).ship);
	});

	test('Gameboard object should not allow to place ships in adjacent cells', () => {
		const gameboard = new Gameboard();

		gameboard.placeShip([1, 1], 1, 'horizontal'); // [1, 1]
		gameboard.placeShip([3, 3], 4, 'horizontal'); // [3, 3] [3, 4] [3, 5] [3, 6]

		expect(() => gameboard.placeShip([1, 2], 1, 'horizontal')).toThrow(); // [1, 2]
		expect(() => gameboard.placeShip([4, 1], 2, 'horizontal')).toThrow(); // [4, 1] [4, 2]
		expect(() => gameboard.placeShip([1, 6], 2, 'vertical')).toThrow(); // [1, 6] [2, 6]
	});

	test('Gameboard should not allow to place ship outside the board (0-9 coords)', () => {
		const gameboard = new Gameboard();

		expect(() => gameboard.placeShip([0, 10], 1, 'horizontal')).toThrow();
		expect(() => gameboard.placeShip([0, 9], 2, 'horizontal')).toThrow();
		expect(() => gameboard.placeShip([-1, 2], 1, 'horizontal')).toThrow();
		expect(() => gameboard.placeShip([7, 4], 4, 'vertical')).toThrow();
	});

	test('Gameboard should receive attacks and hit ship if it is at attack coordinates', () => {
		const gameboard = new Gameboard();
		gameboard.placeShip([3, 3], 1, 'horizontal');
		gameboard.receiveAttack([2, 2]);
		gameboard.receiveAttack([3, 3]);

		expect(gameboard.getCell([2, 2]).isHit).toBe(true);
		expect(gameboard.getCell([3, 3]).isHit).toBe(true);
	});

	test('Gameboard should not receive attacks on the same cell multiple times', () => {
		const gameboard = new Gameboard();
		gameboard.receiveAttack([5, 5]);

		expect(() => gameboard.receiveAttack([5, 5])).toThrow();
	});

	test('Gameboard should have method to report whether all ship cells have been hit', () => {
		const gameboard = new Gameboard();
		gameboard.placeShip([5, 5], 1, 'horizontal');
		gameboard.placeShip([0, 0], 2, 'vertical');

		expect(gameboard.isGameOver).toBe(false);

		gameboard.receiveAttack([5, 5]);

		expect(gameboard.isGameOver).toBe(false);

		gameboard.receiveAttack([0, 0]);

		expect(gameboard.isGameOver).toBe(false);

		gameboard.receiveAttack([1, 0]);

		expect(gameboard.isGameOver).toBe(true);
	});
});
