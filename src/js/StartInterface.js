function StartInterface(){
	this.logo;
	this.toRender = [];
}

StartInterface.prototype = new UI();

StartInterface.prototype.setup = function(){
	this._preload();
	return this;
}

StartInterface.prototype.addToRender = function(UIElem){
	this.toRender.push(UIElem);
}

// preload UI elements
StartInterface.prototype._preload = function(){
	var _this = this;

	// setting up logo
	this.logo = new UIElement();
	this.logo.addImage('img/logo.png').onload(function(){
		_this.logo.x = (_this.canvas.width / 2) - (_this.logo.img.width / 2);
		_this.logo.y = 60;

		// adding to UI Elements stack
		_this.addToRender( _this.logo );
	});

	//setting up text start
	this.startButton = new UIElement();
	this.startButton.addText('Start', 'bold 58px chantal', this.colorLight);
	this.startButton.x = (_this.canvas.width / 2) - (this.startButton.infos.width / 2);
	this.startButton.y = 360;
	this.addToRender(this.startButton);
}

// rendering current UI elements
StartInterface.prototype.render = function(){
	for (var i = this.toRender.length - 1; i >= 0; i--) {
		this.toRender[i].update().render();
	}
}