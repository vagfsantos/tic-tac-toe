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
		console.dir(screen);
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

	clearEvent: function(event, listener){
		this.canvas.removeEventListener(event, listener, false);
		console.log('Cleaning Event');
		console.log(event);
		console.log(listener);
		return this;
	},

	initScreen: function(){
		this.interfaces[ this.currentInterface ].setup();
		return this;
	},

	goToNextInterface: function(){
		if( this.interfaces[ this.currentInterface + 1 ] ){
			this.currentInterface++;
		}
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