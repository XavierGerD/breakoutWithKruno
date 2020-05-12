import { drawBall, moveBall, detectWalls } from "/components/ball.js";
import { drawPaddle } from "/components/paddle.js";
import { movePaddle } from "/components/paddleControls.js";
import { drawBoxes } from "/components/box.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const height = canvas.height;
const width = canvas.width;

const ball = {
	size: 10,
	x: width / 2,
	y: height / 2,
	color: "blue",
	speedX: 2,
	speedY: 2,
};

const paddle = {
	width: 60,
	height: 15,
	color: "#4700b3",
	x: width / 2,
	y: height - 30,
	speed: 4,
};

const drawBackground = () => {
	ctx.fillStyle = "#e3e3e3";
	ctx.rect(0, 0, width, height);
	ctx.fill();
};

const draw = () => {
	ctx.clearRect(0, 0, width, height);
	drawBackground();
	drawBall(ctx, ball);
	drawPaddle(ctx, paddle);
	drawBoxes(ctx);

	window.requestAnimationFrame(draw);
};

const gameLoop = () => {
	moveBall(ball);
	detectWalls(height, width, ball);
	movePaddle(width, paddle);

	window.requestAnimationFrame(gameLoop);
};

draw();
gameLoop();
