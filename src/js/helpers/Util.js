var Util = {}

// Return a new image instance;
Util.createImage = function(img){
    this.img = new Image();
    this.img.src = img;
    this.type = 'img';

    return this;
}

// Return a new text instance;
Util.createText = function(textArgs){
    this.text = textArgs.text;
    this.textFormat = textArgs.textFormat;
    this.color = textArgs.color;
    this.type = 'text';

    this.UI.screen.font = this.textFormat;
    this.infos = this.UI.screen.measureText(textArgs.text);

    return this;
}
