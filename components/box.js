const boxes = [];

let modifierX = 0;
let modifierY = 0;

for (let i = 0; i < 12; i++) {
	if (modifierX === 3) {
		modifierX = 0;
		modifierY++;
	}
	const x = 100 + modifierX * 100;
	const y = 30 + modifierY * 30;
	boxes.push({
		color: "#ed3b91",
		x,
		y,
		width: 80,
		height: 15,
	});
	modifierX++;
}

export const drawBoxes = (ctx) => {
	boxes.forEach((box) => {
		ctx.fillStyle = box.color;
		ctx.rect(box.x, box.y, box.width, box.height);
		ctx.fill();
	});
};
