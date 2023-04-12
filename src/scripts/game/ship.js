export default function Ship(shipSize) {
	if (!Number.isInteger(shipSize) || shipSize <= 0) {
		throw Error('Ivalid argument: ship size must be a positive number');
	}

	let _size = shipSize;
	let _hp = shipSize;

	return {
		get size() {
			return _size;
		},
		get isAlive() {
			return _hp > 0;
		},
		hit() {
			if (_hp > 0) {
				_hp -= 1;
			}
		},
	};
}
