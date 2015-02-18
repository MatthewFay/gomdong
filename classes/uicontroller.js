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
        this.startGame();
    }
};

UIController.prototype.startNextLevel = function() {
    /* Display Level info */
    // Clear screen
    ctx.clearRect(0, 0, 600, 400);
    // Background color
    ctx.beginPath();
    ctx.rect(0, 0, 600, 400);
    ctx.fillStyle = "aliceblue";
    ctx.fill();
    // Level
    ctx.font="bold 48px Gill Sans";
    ctx.fillStyle="cadetblue";
    ctx.fillText("Level " + this.currentLevel.toString(), 210, 175);
    // Start the game after a short period
    setTimeout(function(){ graphicsController.start(); }, 1000);
}

UIController.prototype.displayMessage = function(message) {
    /* Display a message */
    // Message
    ctx.font="bold 48px Gill Sans";
    ctx.fillStyle="cadetblue";
    ctx.fillText(message, 210, 175);
}

UIController.prototype.startGame = function() {
        // Set the state
        userInterfaceEventHandler.setState(State.GAMEPLAY);

        this.resetGame();

        // Display level #
        this.currentLevel = 1;
        this.startNextLevel();
}

UIController.prototype.levelUp = function() {
    /* Go up a level */
    this.currentLevel++;
}

UIController.prototype.resetGame = function() {
    /* Reset game  */

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
}