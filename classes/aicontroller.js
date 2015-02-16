/* enums */


/* The Artificial intelligence */
function AIController() {
	// Properties
	this.difficulty; // Difficulty. Currently not implemented.
	// Tick count
	this.tickCount;
	// ON/OFF switch
	this.active = false;
	// call constructor function
	this.construct();
};

AIController.prototype.construct = function() {
	this.tickCount = 0;
};

AIController.prototype.start = function() {
	this.active = true;
};

AIController.prototype.stop = function() {
	this.active = false;
};

AIController.prototype.tick = function() {
	if (this.tickCount == 10) {
		this.tickCount = 0;
		if (this.active) {
			// Get ball and AI paddle locations.
			var ballLocation = ball.getLocation();
			var aiPaddleLocation = aiPaddle.getLocation();
			// Set direction accordingly
			if ((aiPaddleLocation[y] + (aiPaddle.height/2)) > ballLocation[y]) {
				aiPaddle.setDirection(Direction.UP);
			} else if (aiPaddleLocation[y] + (aiPaddle.height/2) < ballLocation[y]) {
				aiPaddle.setDirection(Direction.DOWN);
			} else {
				aiPaddle.setDirection(Direction.NONE);
			}
		}
	}
	this.tickCount++;
};