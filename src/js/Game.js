function Game(){
	this.interface = new UI();
	this.event = new Event();
}

Game.prototype = {

	setup: function(){
		this.interface.add( new StartInterface() );
		this.event.setup();
		return this;
	},

	init: function(){
		this.interface.interfaces[this.interface.currentInterface].setup();
		this.interface.renderCurrentScreen();
		return this;
	}

}