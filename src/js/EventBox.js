function EventBox(UIElement){
	this.elem = UIElement;
	this.eventAreas = [];
	this.eventActions = [];
}


EventBox.prototype =  new UI();

EventBox.prototype.addEventArea = function(x, y, width, height){
	this.eventAreas.push({
		x: x,
		y: y,
		width: width,
		height: height
	});
	return this;
};


EventBox.prototype.addEventAction = function(type, action){
	this.eventActions.push({
		type: type,
		action: action
	});

	return this;
};

EventBox.prototype.render = function(){
	for (var i = this.eventAreas.length - 1; i >= 0; i--) {
		var area = this.eventAreas[i];
		this.screen.fillRect(area.x, area.y, area.width, area.height);
	}
};
