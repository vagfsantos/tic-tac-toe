function Game(){
	this.interface = new UI();
	this.player = new Player();
	this.playerMachine = new Player(true);
}

Game.prototype = {
	setup: function(){
		this.interface
            .add( new Start(this.interface) )
            .add( new PickYourSide(this.interface, this.player, this.playerMachine) )
            .add( new PlayGame(this.interface, this.player, this.playerMachine) );
		return this;
	},

	init: function(){
		this.interface
			.initScreen()
            .renderCurrentScreen();
		return this;
	}
}