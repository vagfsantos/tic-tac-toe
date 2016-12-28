var UIElementUtil = {};

// Create any type of UIElements
// return new UIElement
UIElementUtil.createNewElement = function(UI, args){
    var elem = new UIElement(UI);
//    
    for( var i in args ){
        if( args.hasOwnProperty(i) )
            elem[i] = args[i];
    }
    
    elem.preload();
    return elem;
};

// Return a new image instance;
UIElementUtil.createImage = function(img){
    this.img = new Image();
    this.img.src = img;
    this.type = 'img';

    return this;
};

// Return a new text instance;
UIElementUtil.createText = function(textArgs){
    this.text = textArgs.text;
    this.textFormat = textArgs.textFormat;
    this.color = textArgs.color;
    this.type = 'text';

    this.UI.screen.font = this.textFormat;
    this.infos = this.UI.screen.measureText(textArgs.text);

    return this;
};
