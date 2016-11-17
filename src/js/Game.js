function Game(){
	this.interface = new UI();
}

Game.prototype = {

	setup: function(){
		this.interface.add( new StartInterface() );
		return this;
	},

	init: function(){
		this.interface.renderCurrentScreen();
		return this;
	}

}