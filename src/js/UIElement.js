function UIElement(){
	this.x = 0;
	this.y = 0;
	this.type = null;
}

UIElement.prototype = new UI();

UIElement.prototype.addImage = function(img){
	this.img = new Image();
	this.img.src = img;
	this.type = 'img';
	return this;
}

UIElement.prototype.onload = function(callback){
	return this.img.addEventListener('load', callback, false);
}

UIElement.prototype.render = function(){
	if( this.type === 'img' ){
		this.screen.drawImage(this.img, this.x, this.y);
	}
}