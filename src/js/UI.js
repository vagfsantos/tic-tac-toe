function UI(){
	// canvas contexts
	this.canvas = document.querySelector('#screen');
	this.screen = this.canvas.getContext('2d');
	
	// color settings
	this.mainColor = '#205F8A';
	this.colorLight = '#A3D8C6';

	// Screens
	this.currentInterface = 0;
	this.interfaces = [];
}

UI.prototype = {
	add: function(screen){
		console.dir(this.screen);
		this.interfaces.push( screen );
		return this;
	},

	save: function(){
		this.screen.save();
		return this;
	},

	restore: function(){
		this.screen.restore();
		return this;
	},

	clear: function(){
		this.screen.clearRect( 0, 0, this.canvas.width, this.canvas.height);
		return this;
	},

	renderCurrentScreen: function(){
		var _this = this;

		this.clear().save();
		this.interfaces[this.currentInterface].render();
		this.restore();

		window.requestAnimationFrame(function(){
			_this.renderCurrentScreen();
		});
	}
}