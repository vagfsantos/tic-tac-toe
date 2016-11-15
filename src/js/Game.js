function Game(){
	this.canvas = document.querySelect('#screen');
	this.screen = this.canvas.getContext('2D');
}

Game.prototype = {

	setup: function(){
		console.log(this.canvas);
		console.log(this.screen);
	}

}