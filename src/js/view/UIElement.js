function UIElement(UI){
	this.UI = UI;
	this.x = 0;
	this.y = 0;
	this.type = null;
	this.eventBox = null;
}

UIElement.prototype = {
	addImage: function(img){
		this.img = new Image();
		this.img.src = img;
		this.type = 'img';
		return this;
	},

	onload: function(callback){
		this.img.addEventListener('load', callback, false);
	},

	addText: function(text, textFormat, color){
		this.text = text;
		this.textFormat = textFormat;
		this.color = color;
		this.type = 'text';

		this.UI.screen.font = this.textFormat;
		this.infos = this.UI.screen.measureText(text);
		return this;
	},

	update: function(callback){
		if( callback && typeof callback == 'function'){
			callback.apply(this, []);
		}
		return this;
	},

	render: function(){
		if( this.eventBox ){
			this.eventBox.render();
		}

		if( this.type === 'img' ){
			this.UI.screen.drawImage(this.img, this.x, this.y);
		}

		if( this.type === 'text' ){
			this.UI.screen.font = this.textFormat;
			this.UI.screen.fillStyle = (this.color);
			this.UI.screen.fillText(this.text, this.x, this.y);
		}
	}
}