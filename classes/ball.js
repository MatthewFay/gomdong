/* A ball */
function Ball() {
	// Properties
	this.location = []; // x, y coordinates
	this.radius = 5;
	// Color
	this.color = "indianred";
	// call constructor function
	this.construct();
};

Ball.prototype.construct = function() {
	// Start location
	this.location[x] = 300;
	this.location[y] = 200;
	// Draw ball
	ctx.beginPath();
	ctx.arc(this.location[x], this.location[y], this.radius, 0, 2*Math.PI);
	ctx.stroke();
};

Ball.prototype.tick = function() {

}