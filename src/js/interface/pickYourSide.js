function PickYourSide(UI){
	this.UI = UI;
	this.logo;
}

PickYourSide.prototype = new Interface();

PickYourSide.prototype.preload = function(){
	var _this = this;

	// setting up logo
	this.logo = new UIElement(this.UI);
	this.logo.addImage('img/logo.png').onload(function(){
		_this.logo.x = (_this.UI.canvas.width / 2) - (_this.logo.img.width / 2);
		_this.logo.y = 60;
		
		// adding to UI Elements stack
		_this.addToRender( _this.logo );
	});
};

PickYourSide.prototype.eventManager = function(){
	
};
