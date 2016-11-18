function Event(){

}


Event.prototype = new Game();


Event.prototype.setup = function(){
	this.clickListener();
}

Event.prototype.clickListener = function(){
	this.interface.canvas.addEventListener('click', function(){
		console.log('click canvas');
	}, false);
}