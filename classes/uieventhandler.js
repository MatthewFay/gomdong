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
            
            break;
        case 38:
            // Up Arrow
            break;
        case 39:
            // Right Arrow
            break;
        case 40:
            // Down Arrow
            playerPaddle.location[y]+=10;
            break;
        }
    };

    /* Respond to keyup player input */
    document.onkeyup = function(e) {
        switch (e.keyCode) {
        case 37:
            // Left Arrow

            break;
        case 38:
            // Up Arrow
            break;
        case 39:
            // Right Arrow
            break;
        case 40:
            // Down Arrow
            break;
        }   
    };
};

UIEventHandler.prototype.setState = function(state) {
    this.state = state;
};