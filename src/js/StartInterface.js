function StartInterface(){
	this.logo;
	this.toRender = [];
	this.events = [];
}

StartInterface.prototype = new UI();

StartInterface.prototype.setup = function(){
	this._preload();
	this.eventManager();
	return this;
}

StartInterface.prototype.addEvent = function(event){
	this.events.push(event);
	return this;
}

StartInterface.prototype.addToRender = function(UIElem){
	this.toRender.push(UIElem);
	return this;
}

// preload UI elements
StartInterface.prototype._preload = function(){
	var _this = this;

	// setting up logo
	this.logo = new UIElement();
	this.logo.addImage('img/logo.png').onload(function(){
		_this.logo.x = (_this.canvas.width / 2) - (_this.logo.img.width / 2);
		_this.logo.y = 60;

		_this.logo.eventBox = new EventBox(_this.logo);
		_this.logo.eventBox
			.addEventArea(_this.logo.x, _this.logo.y, _this.logo.img.width, _this.logo.img.height)
			.addEventAction('click', function(){
				alert('cliquei em img');
			});

		_this.addEvent( new Event().addEventables(_this.logo) );

		// adding to UI Elements stack
		_this.addToRender( _this.logo );
	});
	

	//setting up text start
	this.startButton = new UIElement();
	this.startButton.addText('Start', 'bold 58px chantal', this.colorLight);
	this.startButton.x = (_this.canvas.width / 2) - (this.startButton.infos.width / 2);
	this.startButton.y = 360;

	this.startButton.eventBox = new EventBox(this.startButton);
	this.startButton.eventBox
		.addEventArea(this.startButton.x, this.startButton.y - 40, this.startButton.infos.width, 40)
		.addEventAction('click', function(){
			alert('cliquei em start');
		});

	this.addEvent( new Event().addEventables(this.startButton) );

	this.addToRender(this.startButton);
}

StartInterface.prototype.eventManager = function(){
	var _this = this;

	function canvasEvent(event){
		console.log('click canvas');
		for (var i = _this.events.length - 1; i >= 0; i--) {
			_this.events[i].onClick(event);
		}
	}

	this.canvas.addEventListener('click', canvasEvent, false);
}


// rendering current UI elements
StartInterface.prototype.render = function(){
	for (var i = this.toRender.length - 1; i >= 0; i--) {
		this.toRender[i].update().render();
	}
}