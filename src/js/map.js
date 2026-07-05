const map = {
	"data": [
		1, 1, 1, 1, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 1, 1, 1, 1
	],
	"height": 5,
	"width": 5
}

document.querySelector('a-scene').addEventListener('render-target-loaded', () => {
	const WALL_SIZE = 48;
	const WALL_HEIGHT = 25;
	const el = document.querySelector('#walls');
	const player = document.querySelector('#player');

	for (var x = 0; x < map.height; x++) {
		for (var y = 0; y < map.width; y++) {

			const i = (y * map.width) + x;
			const position = `${((x - (map.width / 2)) * WALL_SIZE)} 1.5 ${(y - (map.height / 2)) * WALL_SIZE}`;

			if (map.data[i] === 1) {
				wall = document.createElement('a-box');
				el.appendChild(wall);

				wall.setAttribute('width', WALL_SIZE);
				wall.setAttribute('height', WALL_HEIGHT);
				wall.setAttribute('depth', WALL_SIZE);
				wall.setAttribute('position', position);
				wall.setAttribute('material', 'visible: false');

				wall.setAttribute('color', '#020202');
				wall.setAttribute('static-body', '');
			}
		}
	}
});
