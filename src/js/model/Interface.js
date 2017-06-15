function Interface(){
	this.toRender = [];
	this.events = [];
}

Interface.prototype = {
	setup: function(){
		this.preload();
		this.eventManager();
		return this;
	},

	addEvent: function(event){
		this.events.push(event);
		return this;
	},

	addToRender: function(){
        var len = arguments.length;

        for(var i = len - 1; i >= 0; i--)
            this.toRender.push(arguments[i]);

		return this;
	},

	render: function(){
		for (var i = this.toRender.length - 1; i >= 0; i--) {
			if(this.toRender[i].update){
                this.toRender[i].update()
            }
            this.toRender[i].render();
		}
	}
}
