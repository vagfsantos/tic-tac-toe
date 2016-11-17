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
	this.img.addEventListener('load', callback, false);
}

UIElement.prototype.addText = function(text, textFormat, color){
	this.text = text;
	this.textFormat = textFormat;
	this.color = color;
	this.type = 'text';

	this.screen.font = this.textFormat;
	this.infos = this.screen.measureText(text);
	return this;
}

UIElement.prototype.render = function(){
	if( this.type === 'img' ){
		this.screen.drawImage(this.img, this.x, this.y);
	}

	if( this.type === 'text' ){
		this.screen.font = this.textFormat;
		this.screen.fillStyle = (this.color);
		this.screen.fillText(this.text, this.x, this.y);
	}
}