=======
Gomdong
=======

:Authors:
   Matthew Fay
:Release:
   0.1.0
:Release-Date:
   02/17/2015
:Last-Edited:
   02/17/2015

Gomdong is pong with a futuristic Alien twist.

Imagine a human soldier and an alien flinging a plasma ball back and forth using energy deflectors... That is Gomdong.
(After I get some art created).

Description of Files
--------------------

index.html: Launch point. Creates canvas object and brings in all the Javascript.

constants.js: Application constants.

app.js: Creates the user interface event handler and controller, starting the app.

classes/aicontroller.js: The artificial intelligence controller. Controls the opponent paddle.

classes/ball.js: The game ball. Includes ball physics (ie. how ball reacts to collisions).

classes/graphicscontroller.js: The animation/graphics drawing controller. Includes the main game loop.

classes/paddle.js: A paddle. Can belong to either a player or the AI.

classes/uicontroller.js: The user interface controller. Controls menus.

classes/uieventhandler.js: The user interface event handler. Handles player input.
