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

	addToRender: function(UIElem){
		this.toRender.push(UIElem);
		return this;
	},

	render: function(){
		for (var i = this.toRender.length - 1; i >= 0; i--) {
			this.toRender[i].update().render();
		}
	}
}