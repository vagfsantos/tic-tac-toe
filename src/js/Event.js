function Event(){
	this.eventables = [];
}


Event.prototype = {
	addEventables: function(UIElement){
		this.eventables.push(UIElement);
		return this;
	},

	onHit: function(eventData, eventType){
		var x = eventData.offsetX;
		var y = eventData.offsetY;

		// looping throught eventables list
		for (var i = this.eventables.length - 1; i >= 0; i--) {
			var eventAreas = this.eventables[i].eventBox.eventAreas;

			for (var h = eventAreas.length - 1; h >= 0; h--) {
				var boxX = eventAreas[h].x;
				var boxY = eventAreas[h].y;
				var boxOffsetWidth = boxX + eventAreas[h].width;
				var boxOffsetHeight = boxY + eventAreas[h].height;

				if( (x > boxX && x < boxOffsetWidth) && (y > boxY && y < boxOffsetHeight) ){
					var events = this.eventables[i].eventBox.eventActions;
					
					// looping throught events on each eventable item
					for (var j = events.length - 1; j >= 0; j--) {
						if( events[j].action[eventType] ){
							events[j].action[eventType]();
						}
					}

					break;
				}
			}
		}
	}
}