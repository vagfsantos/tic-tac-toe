function Game(){
	this.interface = new UI();
	this.player = new Player();
}

Game.prototype = {
	setup: function(){
		this.interface
		.add( new Start(this.interface) )
		.add( new PickYourSide(this.interface, this.player) )
		.add( new PlayGame(this.interface, this.player) );
		return this;
	},

	init: function(){
		this.interface
			.initScreen().renderCurrentScreen();
		return this;
	}
}