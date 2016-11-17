function StartScreen(){
	this.logo;
	this.toRender = [];
}

StartScreen.prototype = new UI();

StartScreen.prototype.init = function(){
	this._preload();
}

StartScreen.prototype.addToRender = function(UIElem){
	this.toRender.push(UIElem);
}

StartScreen.prototype._preload = function(){
	var _this = this;
	
	this.logo = new UIElement();
	this.addToRender(this.logo);
	
	this.logo.addImage('img/logo.png')
	.onload(function(){
		_this._render();
	});
}

StartScreen.prototype._render = function(){
	for (var i = this.toRender.length - 1; i >= 0; i--) {
		this.toRender[i].render();
	}
}