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
	this.color; // Fill color
	// Initialize the paddle as still
	this.direction = Direction.NONE;
	// call constructor function
	this.construct();
};

Paddle.prototype.construct = function() {
	if (this.owner == PaddleOwner.PLAYER) {
		/* Color */
		this.color = "cadetblue";
		/* Set starting location */
		this.location = [5, 20];
		/* Draw paddle */
		ctx.beginPath();
		ctx.rect(this.location[x], this.location[y], this.width, this.height);
		ctx.fillStyle = this.color;
		ctx.fill();
	} else if (this.owner == PaddleOwner.AI) {
		/* Color */
		this.color = "crimson";
		/* Set starting location */
		this.location = [580, 280];
		/* Draw paddle */
		ctx.beginPath();
		ctx.rect(this.location[x], this.location[y], this.width, this.height);
		// Red
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

Paddle.prototype.setDirection = function(direction) {
	this.direction = direction;
};

Paddle.prototype.getDirection = function() {
	return this.direction;
};

Paddle.prototype.stopMovement = function() {
	this.direction = Direction.NONE;
};

Paddle.prototype.getLocation = function() {
	return this.location;
};

Paddle.prototype.tick = function() {
	if (this.owner == PaddleOwner.PLAYER) {
		switch (this.direction) {
			case Direction.UP:
			this.location[y] -= 5;
			// Check for wall collision
			if (this.location[y] <= 0) {
				this.location[y] = 0;
			}
			break;
			case Direction.RIGHT:
			this.location[x] += 5;
			// Check for wall collision
			if (this.location[x] >= (100 - this.width)) {
				this.location[x] = (100 - this.width);
			}
			break;
			case Direction.DOWN:
			this.location[y] += 5;
			// Check for wall collision
			if (this.location[y] >= (400 - this.height)) {
				this.location[y] = (400 - this.height);
			}
			break;
			case Direction.LEFT:
			this.location[x] -= 5;
			// Check for wall collision
			if (this.location[x] <= 0) {
				this.location[0] = 0;
			}
			break;
		}
	} else {
		switch (this.direction) {
			case Direction.UP:
			this.location[y] -= 5;
			// Check for wall collision
			if (this.location[y] <= 0) {
				this.location[y] = 0;
			}
			break;
			case Direction.RIGHT:
			this.location[x] += 5;
			// Check for wall collision
			if (this.location[x] + this.width >= 600) {
				this.location[x] = 600;
			}
			break;
			case Direction.DOWN:
			this.location[y] += 5;
			// Check for wall collision
			if (this.location[y] >= (400 - this.height)) {
				this.location[y] = (400 - this.height);
			}
			break;
			case Direction.LEFT:
			this.location[x] -= 5;
			// Check for wall collision
			if (this.location[x] <= 500) {
				this.location[x] = 500;
			}
		}
	}
};