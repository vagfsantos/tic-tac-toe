function UIElement(UI){
	this.UI = UI;
	this.x = 0;
	this.y = 0;
	this.type = null;
	this.eventBox = null;
}

UIElement.prototype = {
	addImage: function(img){
		return Util.createImage.apply(this, [img]);
	},

	onload: function(callback){
		this.img.addEventListener('load', callback, false);
	},

	addText: function(textArgs){
		return Util.createText.apply(this, [textArgs]);
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
