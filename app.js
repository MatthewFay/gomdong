/*
//
// Gomdong v0.1
// A simple pong game with a twist.
//
// Written by Matthew Fay.
//
*/

/* Get our canvas objects */
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

/* Create the paddles */
var playerPaddle = new Paddle(PaddleOwner.PLAYER);
var aiPaddle = new Paddle(PaddleOwner.AI);

/* Create the ball */
var ball = new Ball();

/* Create the user interface event handler */
var userInterfaceEventHandler = new UIEventHandler();

/* Set the state of the UI event handler */
userInterfaceEventHandler.setState(State.FREE);

/* Create the Graphics Controller */
graphicsController = new GraphicsController();

/* Add our visual objects into the graphics controller */
graphicsController.addObject(playerPaddle);
graphicsController.addObject(aiPaddle);
graphicsController.addObject(ball);

/* Create a collision handler */
collisionHandler = new CollisionHandler();

/* Add our visual objects to the collison handler */
collisionHandler.addObject(playerPaddle);
collisionHandler.addObject(aiPaddle);
collisionHandler.addObject(ball);