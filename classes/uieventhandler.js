/* enums */

/* The UI state */
var State = {
    START_MENU : 0,
    GAMEPLAY : 1
};

/* The User interface event handler */
function UIEventHandler() {
	// Properties
	this.state;
	// call constructor function
	this.construct();
};

UIEventHandler.prototype.construct = function() {
	
};

UIEventHandler.prototype.setState = function(state) {
    this.state = state;
    this.update();
};

UIEventHandler.prototype.update = function() {
    if (this.state == State.GAMEPLAY) {
        /* Respond to game play input */
        /* Key down */
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

       /* Key up */
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
    } else if (this.state == State.START_MENU) {
        /* Respond to start menu input */
        /* Key down */
        document.onkeydown = function(e) {
            switch (e.keyCode) {
            case 38:
                // Up Arrow
                userInterfaceController.menuUp();
                break;
            case 40:
                // Down Arrow
                userInterfaceController.menuDown();
                break;
            case 13:
                // Enter
                userInterfaceController.select();
            }
        };
    }
};