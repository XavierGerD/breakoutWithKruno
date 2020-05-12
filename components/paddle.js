export const drawPaddle = (ctx, paddle) => {
	ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
	ctx.fillStyle = paddle.color;
	ctx.fill();
};

export const detectCollision = (height, width, paddle, ball) => {};
