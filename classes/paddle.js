/* enums */

/* The owner/user of the paddle */
var PaddleOwner = {
	PLAYER : 0,
	AI : 1
};

/* A paddle */
function Paddle(owner) {
	// Properties
	this.owner = owner; // The owner/user of the paddle
	this.location = []; // x, y coordinates
	this.height = 100;
	this.width = 15;
	// call constructor function
	this.construct();
};

Paddle.prototype.construct = function() {
	if (this.owner == PaddleOwner.PLAYER) {
		/* Set starting location */
		this.location = [5, 20];
		/* Draw paddle */
		ctx.beginPath();
		ctx.rect(this.location[x], this.location[y], this.width, this.height);
		ctx.fill();
	} else if (this.owner == PaddleOwner.AI) {
		/* Set starting location */
		this.location = [580, 280];
		/* Draw paddle */
		ctx.beginPath();
		ctx.rect(this.location[x], this.location[y], this.width, this.height);
		// Red
		ctx.fillStyle="#FF0000";
		ctx.fill();
	}
};