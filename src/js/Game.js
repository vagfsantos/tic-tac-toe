function Game(){
	this.interface = new UI();
}

Game.prototype = {
	setup: function(){
		this.interface
		.add( new Start(this.interface) )
		.add( new PickYourSide(this.interface) );
		return this;
	},

	init: function(){
		this.interface
			.initScreen().renderCurrentScreen();
		return this;
	}
}