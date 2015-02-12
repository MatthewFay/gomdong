/* enums */

var test =1;

/* The UI state */
var State = {
    FREE : 0
};

/* The User interface event handler */
function UIEventHandler() {
	// Properties
	this.state;
	// call constructor function
	this.construct();
};

UIEventHandler.prototype.construct = function() {
	/* Respond to keydown player input */
    document.onkeydown = function(e) {
        switch (e.keyCode) {
        case 37:
            // Left Arrow
            playerPaddle.setDirection(Direction.LEFT);
            break;
        case 38:
            // Up Arrow
            playerPaddle.setDirection(Direction.UP);
            break;
        case 39:
            // Right Arrow
            playerPaddle.setDirection(Direction.RIGHT);
            break;
        case 40:
            // Down Arrow
            playerPaddle.setDirection(Direction.DOWN);
        }
    };

    /* Respond to keyup player input */
    document.onkeyup = function(e) {
        switch (e.keyCode) {
        case 37:
            // Left Arrow
            playerPaddle.stopMovement();
            break;
        case 38:
            // Up Arrow
            playerPaddle.stopMovement();
            break;
        case 39:
            // Right Arrow
            playerPaddle.stopMovement();
            break;
        case 40:
            // Down Arrow
            playerPaddle.stopMovement();
        }   
    };
};

UIEventHandler.prototype.setState = function(state) {
    this.state = state;
};