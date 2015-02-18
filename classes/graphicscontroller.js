/* The Graphics controller */
function GraphicsController() {
	// Properties
	this.objects = []; // The objects under the controller
    this.refreshRate = 17; // Refresh rate (ms) - About 60 FPS
    this.masterTimer; // Master timer
    this.active; // Are we on/off
	// call constructor function
	this.construct();
};

GraphicsController.prototype.construct = function() {
    
};

GraphicsController.prototype.addObject = function(object) {
    // Add an object to the gameplay loop
    this.objects.push(object);
};

GraphicsController.prototype.start = function() {
    // Master timer
    // Start the gameplay loop
    this.active = true;
    this.masterTimer = setInterval(function () {graphicsController.refresh()}, this.refreshRate);
};

GraphicsController.prototype.stop = function() {
    // Stop the gameplay loop
    clearInterval(this.masterTimer);
    this.active = false;
};

// GAMEPLAY LOOP //
GraphicsController.prototype.refresh = function() {
    // Clear the canvas
    ctx.clearRect(0, 0, 600, 400);
    // Draw the background
    this.drawBackground();
    // Draw the objects
    this.objects.forEach(function(object) {
        ctx.beginPath();
        // Call a tick
        object.tick();
        // Draw, if active
        if (graphicsController.active) {
            if (Paddle.prototype.isPrototypeOf(object)) {
                ctx.rect(object.location[x], object.location[y], object.width, object.height);
            } else if (Ball.prototype.isPrototypeOf(object)) {
                ctx.arc(object.location[x], object.location[y], object.radius, 0, 2*Math.PI);
            }
            // Get object fill color
            ctx.fillStyle = object.color;
            ctx.fill();
        }
    });
    // Beep-boop
    opponent.tick();
};

GraphicsController.prototype.drawBackground = function() {
    /* Draw the background */
    // Left barrier
    ctx.beginPath();
    ctx.moveTo(100,0);
    ctx.lineTo(100,400);
    ctx.stroke();
    // Right barrier
    ctx.beginPath();
    ctx.moveTo(500,0);
    ctx.lineTo(500,400);
    ctx.stroke();
};