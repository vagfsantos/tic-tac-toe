var PickYourSide = (function(){

	var eventsHandler = {};

	function PickYourSide(UI, Player){
		this.UI = UI;
		this.player = Player;
		this.logo;
	}

	PickYourSide.prototype = new Interface();

	PickYourSide.prototype.preload = function(){
		var _this = this;

		// setting up logo
		this.logo = new UIElement(this.UI);
		this.logo.addImage('img/logo.png').onload(function(){
			_this.logo.x = (_this.UI.canvas.width / 2) - (_this.logo.img.width / 2);
			_this.logo.y = 60;
			
			// adding to UI Elements stack
			_this.addToRender( _this.logo );
		});

		// info text
		this.infoText = new UIElement(this.UI);
		this.infoText.addText('Pick Your Side', '38px chantal', this.UI.colorMainLight);
		this.infoText.x = (_this.UI.canvas.width / 2) - (this.infoText.infos.width / 2);
		this.infoText.y = 300;

		//x option
		this.btnX = new UIElement(this.UI);
		this.btnX.addImage('img/btn-x.png').onload(function(){
			_this.btnX.x = (_this.UI.canvas.width / 2) - _this.btnX.img.width - 15;
			_this.btnX.y = 330;

			// adding event
			_this.btnX.eventBox = new EventBox(_this.UI, _this.btnX);
			_this.btnX.eventBox
				.addEventArea(_this.btnX.x, _this.btnX.y, _this.btnX.img.width, _this.btnX.img.height)
				.addEventAction({
					click: function(){
						_this.player.setTeamAs('x');
						
						_this.UI.goToNextInterface().initScreen()
								.clearEvent('click', eventsHandler.click)
					}
				});

			_this.addEvent( new Event().addEventables(_this.btnX) );
			
			// adding to UI Elements stack
			_this.addToRender( _this.btnX );
		});

		//O option
		this.btnO = new UIElement(this.UI);
		this.btnO.addImage('img/btn-o.png').onload(function(){
			_this.btnO.x = (_this.UI.canvas.width / 2) + 15;
			_this.btnO.y = 330;

			// adding event
			_this.btnO.eventBox = new EventBox(_this.UI, _this.btnO);
			_this.btnO.eventBox
				.addEventArea(_this.btnO.x, _this.btnO.y, _this.btnO.img.width, _this.btnO.img.height)
				.addEventAction({
					click: function(){
						_this.player.setTeamAs('o');
						
						_this.UI.goToNextInterface().initScreen()
								.clearEvent('click', eventsHandler.click)
					}
				});

			_this.addEvent( new Event().addEventables(_this.btnO) );
			
			// adding to UI Elements stack
			_this.addToRender( _this.btnO );
		});

		this.addToRender(this.infoText);
	};

	PickYourSide.prototype.eventManager = function(){
		var _this = this;

		eventsHandler.click = function(event){
			for (var i = _this.events.length - 1; i >= 0; i--) {
				_this.events[i].onHit(event, 'click');
			}
		}

		this.UI.canvas.addEventListener('click', eventsHandler.click, false);
	};


	return PickYourSide;
})();
