export const drawBall = (ctx, ball) => {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
	ctx.fillStyle = ball.color;
	ctx.fill();
};

export const moveBall = (ball) => {
	ball.x += ball.speedX;
	ball.y += ball.speedY;
};

export const detectWalls = (height, width, ball) => {
	if (ball.x < ball.size) ball.speedX = -ball.speedX;
	if (ball.x > width - ball.size) ball.speedX = -ball.speedX;
	if (ball.y < ball.size) ball.speedY = -ball.speedY;
	if (ball.y > height - ball.size) ball.speedY = -ball.speedY;
};
