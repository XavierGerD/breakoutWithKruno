export const movePaddle = (width, paddle) => {
	if (moveDirection === "none") return;
	if (moveDirection === "left" && paddle.x > 0) paddle.x -= paddle.speed;
	if (moveDirection === "right" && paddle.x < width - paddle.width)
		paddle.x += paddle.speed;
};

let moveDirection = "none";

const keyDownHandler = (event) => {
	if (event.key === "ArrowLeft") moveDirection = "left";
	if (event.key === "ArrowRight") moveDirection = "right";
};

const keyUpHandler = () => {
	moveDirection = "none";
};

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
