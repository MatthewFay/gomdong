/* enums */

/* Start Menu selected button */
var StartMenuSelectedButton = {
    PLAY : 0,
    SETTINGS : 1,
    ABOUT : 2
};

/* The User interface controller */
function UIController() {
	// Properties
	this.selectedButton; // Button that is currently selected
    this.currentLevel; // Level that player is currently playing
	// call constructor function
	this.construct();
};

UIController.prototype.construct = function() {
	// Basically our app staring point.
    // Set the UI state
    userInterfaceEventHandler.setState(State.START_MENU);
    // Display the start menu w/ play button selected
    this.selectedButton = StartMenuSelectedButton.PLAY;
    this.displayStartMenu();
};

UIController.prototype.displayStartMenu = function() {
    /* Start Menu */
    // Background color
    ctx.beginPath();
    ctx.rect(0, 0, 600, 400);
    ctx.fillStyle = "aliceblue";
    ctx.fill();
    // Title
    ctx.font="italic bold 72px Gill Sans";
    ctx.fillStyle="cadetblue";
    ctx.fillText("Gomdong", 130, 75);
    // play
    if (this.selectedButton == StartMenuSelectedButton.PLAY) {
        ctx.font="bold 24px Gill Sans";
    } else {
        ctx.font="24px Gill Sans";
    }
    ctx.fillStyle="cadetblue";
    ctx.fillText("play", 250, 175);
    // settings
    if (this.selectedButton == StartMenuSelectedButton.SETTINGS) {
        ctx.font="bold 24px Gill Sans";
    } else {
        ctx.font="24px Gill Sans";
    }
    ctx.fillStyle="cadetblue";
    ctx.fillText("settings", 250, 225);
    // about
    if (this.selectedButton == StartMenuSelectedButton.ABOUT) {
        ctx.font="bold 24px Gill Sans";
    } else {
        ctx.font="24px Gill Sans";
    }
    ctx.fillStyle="cadetblue";
    ctx.fillText("about", 250, 275);
    // footnotes
    ctx.font="12px Gill Sans";
    ctx.fillStyle="cadetblue";
    ctx.fillText("use up/down arrows to navigate menu, enter to select.", 5, 395);
};

UIController.prototype.menuUp = function() {
    if (this.selectedButton == StartMenuSelectedButton.ABOUT) {
        this.selectedButton = StartMenuSelectedButton.SETTINGS;
        this.displayStartMenu();
    } else if (this.selectedButton == StartMenuSelectedButton.SETTINGS) {
        this.selectedButton = StartMenuSelectedButton.PLAY;
        this.displayStartMenu();
    }
};

UIController.prototype.menuDown = function() {
    if (this.selectedButton == StartMenuSelectedButton.PLAY) {
        this.selectedButton = StartMenuSelectedButton.SETTINGS;
        this.displayStartMenu();
    } else if (this.selectedButton == StartMenuSelectedButton.SETTINGS) {
        this.selectedButton = StartMenuSelectedButton.ABOUT;
        this.displayStartMenu();
    }
};

UIController.prototype.select = function() {
    if (this.selectedButton == StartMenuSelectedButton.PLAY) {
        // Set the state
        userInterfaceEventHandler.setState(State.GAMEPLAY);

        // TODO: Display level #

        /* Create the paddles */
        playerPaddle = new Paddle(PaddleOwner.PLAYER);
        aiPaddle = new Paddle(PaddleOwner.AI);

        /* Create the ball */
        ball = new Ball();

        /* Create the Graphics Controller */
        graphicsController = new GraphicsController();

        /* Add our visual objects into the graphics controller */
        graphicsController.addObject(playerPaddle);
        graphicsController.addObject(aiPaddle);
        graphicsController.addObject(ball);

        /* Create the AI */
        opponent = new AIController();
        opponent.start();

        // Start the game
        graphicsController.start();
    }
};

UIController.prototype.displayLevel = function() {
    /* Level */
    // Background color
    ctx.beginPath();
    ctx.rect(0, 0, 600, 400);
    ctx.fillStyle = "aliceblue";
    ctx.fill();
    // Level
    ctx.font="bold 48px Gill Sans";
    ctx.fillStyle="cadetblue";
    ctx.fillText("Level " + this.currentLevel.toString(), 130, 175);
}