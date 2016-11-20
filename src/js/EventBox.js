function EventBox(UI, UIElement){
	this.UI = UI;
	this.elem = UIElement;
	this.eventAreas = [];
	this.eventActions = [];
}

EventBox.prototype = {
	addEventArea: function(x, y, width, height){
		this.eventAreas.push({
			x: x,
			y: y,
			width: width,
			height: height
		});
		return this;
	},

	addEventAction: function(type, action){
		this.eventActions.push({
			type: type,
			action: action
		});

		return this;
	},

	render: function(){
		for (var i = this.eventAreas.length - 1; i >= 0; i--) {
			var area = this.eventAreas[i];
			this.UI.screen.strokeStyle = '#0ff';
			this.UI.screen.strokeRect(area.x, area.y, area.width, area.height);
		}
	}
}