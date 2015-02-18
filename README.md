# Gomdong 
Gomdong is pong with a futuristic Alien twist.

Imagine a human soldier and an alien flinging a plasma ball back and forth using energy deflectors... That is Gomdong.
(After I get some art created).

--

index.html: Launch point. Creates canvas object and brings in all the Javascript.

constants.js: Application constants.

app.js: Creates the U/I event handler and controller, starting the app.

classes/aicontroller.js: The AI controller. Controls the opponent paddle.

classes/ball.js: The game ball. Includes how ball reacts to collisions.

classes/graphicscontroller.js: The animation/graphics drawing controller. Includes the main game loop.

classes/paddle.js: A paddle. Can be player or AI.

classes/uicontroller.js: The user interface controller. Controls menus.

classes/uievenhandler.js: The user interface event handler. Handles player input.
