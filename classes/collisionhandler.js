/* The Collision handler */
function CollisionHandler() {
	// Properties
	this.objects = []; // The objects under the controller
	// call constructor function
	this.construct();
};

CollisionHandler.prototype.construct = function() {
};

CollisionHandler.prototype.addObject = function(object) {
    this.objects.push(object);
};

CollisionHandler.prototype.handlePossibleCollisions = function() {
    this.objects.forEach(function(object) {
        
    });
};