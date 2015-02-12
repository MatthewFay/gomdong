/* The Graphics controller */
function GraphicsController() {
	// Properties
	this.objects = []; // The objects under the controller
    this.refreshRate = 50; // Refresh rate (ms)
    this.masterTimer; // Master timer
	// call constructor function
	this.construct();
};

GraphicsController.prototype.construct = function() {
    // Master timer
    this.masterTimer = setInterval(function () {graphicsController.refresh()}, this.refreshRate);
};

GraphicsController.prototype.addObject = function(object) {
    this.objects.push(object);
};

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
        // Handle possible collisions
        collisionHandler.handlePossibleCollisions();
        // Draw
        if (Paddle.prototype.isPrototypeOf(object)) {
            ctx.rect(object.location[x], object.location[y], object.width, object.height);
        } else if (Ball.prototype.isPrototypeOf(object)) {
            ctx.arc(object.location[x], object.location[y], object.radius, 0, 2*Math.PI);
        }
        // Get object fill color
        ctx.fillStyle = object.color;
        ctx.fill();
    });
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