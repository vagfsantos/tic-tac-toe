function Game(){
	this.currentScreen = 0;
	this.screens = [
		new StartScreen()
	]
}

Game.prototype = {

	init: function(){
		this.screens[this.currentScreen].init();
	}

}