var Start = (function(){
	
	var eventHandlerStart;

	function Start(UI){
		this.UI = UI;
		this.logo;
	}

	Start.prototype = new Interface();

	Start.prototype.preload = function(){
		var _this = this;

		// setting up logo
		this.logo = new UIElement(this.UI);
		this.logo.addImage('img/logo.png').onload(function(){
			_this.logo.x = (_this.UI.canvas.width / 2) - (_this.logo.img.width / 2);
			_this.logo.y = 60;

			_this.logo.eventBox = new EventBox(_this.UI, _this.logo);
			_this.logo.eventBox
				.addEventArea(_this.logo.x, _this.logo.y, _this.logo.img.width, _this.logo.img.height)
				.addEventAction('click', function(){
					alert('cliquei em img');
				});

			_this.addEvent( new Event().addEventables(_this.logo) );

			// adding to UI Elements stack
			_this.addToRender( _this.logo );
		});
		

		//setting up text start
		this.startButton = new UIElement(this.UI);
		this.startButton.addText('Start', 'bold 58px chantal', this.UI.colorLight);
		this.startButton.x = (_this.UI.canvas.width / 2) - (this.startButton.infos.width / 2);
		this.startButton.y = 360;

		this.startButton.eventBox = new EventBox(this.UI, this.startButton);
		this.startButton.eventBox
			.addEventArea(this.startButton.x, this.startButton.y - 40, this.startButton.infos.width, 40)
			.addEventAction('click', function(){
				_this.UI.goToNextInterface().initScreen().clearEvent('click', eventHandlerStart);
			});

		this.addEvent( new Event().addEventables(this.startButton) );

		this.addToRender(this.startButton);
	};

	Start.prototype.eventManager = function(){
		var _this = this;
		eventHandlerStart = function(event){
			for (var i = _this.events.length - 1; i >= 0; i--) {
				_this.events[i].onClick(event);
			}
		}

		this.UI.canvas.addEventListener('click', eventHandlerStart, false);
	}

return Start;

})();
