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
    ctx.clearRect(0, 0, 600, 400);
    this.objects.forEach(function(object) {
        ctx.beginPath();
        ctx.rect(object.location[x], object.location[y], object.width, object.height);
        ctx.fill();
    });
};