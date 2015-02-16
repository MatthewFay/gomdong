/* A ball */
function Ball() {
	// Properties
	this.location = []; // x, y coordinates
	this.destination = []; // x, y coordinates for destination
	this.speedPerTick = 4; // Ball movement speed per tick
	this.radius = 5;
	// The general direction the ball is heading.
	// Will be either left or right.
	this.direction;
	// Color
	this.color = "indianred";
	// call constructor function
	this.construct();
};

Ball.prototype.construct = function() {
	// Start location
	this.location[x] = 300;
	this.location[y] = 200;
	// When round starts, ball goes in random direction.
	// Set destination to make this happen.
	// First, figure out which way.
	var randomNumber = Math.floor((Math.random() * 10) + 1);
	if (randomNumber > 0 && randomNumber < 6) {
		// Left
		this.direction = Direction.LEFT;
		this.destination[x] = 0;
	} else {
		// Right
		this.direction = Direction.RIGHT;
		this.destination[x] = 600;
	}
	// Now set a random Y destination
	var randomNumber = Math.floor((Math.random() * 400) + 0);
	this.destination[y] = randomNumber;
	// Draw ball
	ctx.beginPath();
	ctx.arc(this.location[x], this.location[y], this.radius, 0, 2*Math.PI);
	ctx.stroke();
};

Ball.prototype.tick = function() {
	/* Calculate new ball location */
	var delta_x = this.destination[x] - this.location[x];
	var delta_y = this.destination[y] - this.location[y];

	var destinationDistance = Math.sqrt((delta_x * delta_x) + (delta_y * delta_y));

	if (destinationDistance > this.speedPerTick) {
		var ratio = this.speedPerTick / destinationDistance;
		var x_move = ratio * delta_x;
		var y_move = ratio * delta_y;
		this.location[x] = x_move + this.location[x];
		this.location[y] = y_move + this.location[y];
	} else {
		this.location[x] = this.destination[x];
		this.location[y] = this.destination[y];
	}

	/* Check for wall collisions */
	if (this.location[x] <= 0) {
		// AI WIN
		
	} else if (this.location[x] >= 600) {
		// PLAYER WIN
		
	} else if (this.location[y] <= 0) {
		// Bounce off top wall
		this.destination[y] = Math.abs(this.destination[y]);
	} else if (this.location[y] >= 400) {
		// Bounce off bottom wall
		this.destination[y] = 400 - (this.destination[y] - 400);
	}

	/* Check for paddle collisions */
	var collision = this.checkPaddleCollision(playerPaddle);
	if (!collision) {
		this.checkPaddleCollision(aiPaddle);
	} 
};

Ball.prototype.checkPaddleCollision = function(paddle) {
	// Get location of paddle
	var paddleLocation = paddle.getLocation();
	// Run some collision checks against player paddle
	if (this.location[x] >= paddleLocation[x] && 
		this.location[x] <= (paddleLocation[x] + paddle.width) &&
		this.location[y] >= paddleLocation[y] &&
		this.location[y] <= (paddleLocation[y] + paddle.height)) {
		// Houston, we have a collision.
		// Increase ball speed.
		this.speedPerTick += .5;
		// Figure out where, relatively from the top of the paddle,
		// the ball hit.
		var topOfPaddle = paddleLocation[y];
		var collisionDistanceFromTopOfPaddle = this.location[y] - topOfPaddle;
		// Figure out how far we are from center of paddle.
		var distanceFromCenterOfPaddle = (playerPaddle.height/2) - collisionDistanceFromTopOfPaddle;
		// If we have a negative number, the ball hit the bottom 
		// half of the paddle.
		if (distanceFromCenterOfPaddle < 0) {
			var angle = Direction.DOWN;
		} else {
			var angle = Direction.UP;
		}
		// Make sure units are positive number.
		var units = Math.abs(distanceFromCenterOfPaddle);
		// New x destination is opposite side of gameplay area.
		if (paddle.owner == PaddleOwner.PLAYER) {
			this.destination[x] = 600;
		} else if (paddle.owner == PaddleOwner.AI) {
			this.destination[x] = 0;
		}
		// Calculate new y destination of ball.
		// First, we need to know y differential
		var yDifferential = units * 5;
		// Second, get y value of middle of paddle.
		var yMiddleOfPaddle = topOfPaddle + (playerPaddle.height/2);
		// Lastly, add/subtract differential based on angle.
		if (angle == Direction.DOWN) {
			this.destination[y] += yDifferential;
		} else {
			this.destination[y] -= yDifferential;
		}
		// Set the direction variable
		if (paddle.owner == PaddleOwner.PLAYER) {
			this.direction = Direction.RIGHT;
		} else if (paddle.owner == PaddleOwner.AI) {
			this.direction = Direction.LEFT;
		}
	}
};

Ball.prototype.getLocation = function() {
	return this.location;
};
