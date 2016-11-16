function StartScreen(){
	this.logo;
}

StartScreen.prototype = new UI();

StartScreen.prototype.preload = function(){
	var _this = this;

	this.logo = new Image();
	this.logo.src = 'img/logo.png';
	this.logo.addEventListener('load', function(){

		_this.render();

	}, false);
}

StartScreen.prototype.render = function(){
	this.screen.drawImage(this.logo, 0, 0);
}