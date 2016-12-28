function UIElement(UI){
	this.UI = UI;
	this.x = 0;
	this.y = 0;
	this.type = null;
	this.eventBox = null;
}

UIElement.prototype = {
    preload: function(){
        var _this = this;
        // start the configuration
        if( this.setup ) this.setup();
        
        if( this.type == 'img' ){
            UIElementUtil.createImage.apply(this, [this.imgSrc]);
            this.img.addEventListener('load', function(){
                _this.onload.apply(_this, []);
            }, false);
        }
        
        if( this.type == 'text' ){
            UIElementUtil.createText.apply(this, [this.textSetup]);
            if( this.onload ) this.onload();
        }
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
