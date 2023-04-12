import Ship from '../scripts/game/ship.js';

describe('Ship factory function', () => {
	test('Function should return object with required properties', () => {
		const ship = new Ship(4);

		expect(ship).toHaveProperty('size');
		expect(ship).toHaveProperty('isAlive');
		expect(ship).toHaveProperty('hit');
	});

	test('Returned object has valid size property value', () => {
		expect(new Ship(1).size).toBe(1);
		expect(new Ship(4).size).toBe(4);
	});

	test('Function should handle invalid arguments', () => {
		expect(() => {
			new Ship(0);
		}).toThrow();

		expect(() => {
			new Ship(-1);
		}).toThrow();

		expect(() => {
			new Ship(0.5);
		}).toThrow();

		expect(() => {
			new Ship();
		}).toThrow();

		expect(() => {
			new Ship(null);
		}).toThrow();

		expect(() => {
			new Ship('string');
		}).toThrow();
	});

	test('Ship should be alive initially and dead after number of hits equal to its size', () => {
		const ship = Ship(3);

		expect(ship.isAlive).toBe(true);

		ship.hit();
		expect(ship.isAlive).toBe(true);

		ship.hit();
		expect(ship.isAlive).toBe(true);

		ship.hit();
		expect(ship.isAlive).toBe(false);
	});
});
