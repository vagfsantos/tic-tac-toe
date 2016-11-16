function Game(){
	this.startScreen = new StartScreen();
}

Game.prototype = {

	init: function(){
		this.startScreen.preload();
	}

}