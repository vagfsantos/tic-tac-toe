var Start = (function(){
	
	var eventsHandler = {};

	function Start(UI){
		this.UI = UI;
		this.logo;
	}

	Start.prototype = new Interface();

	Start.prototype.preload = function(){
		var _this = this;

        // setting up logo image
		var logo = new UIElement(this.UI);
		logo.addImage('img/logo.png').onload(function(){
			logo.x = (_this.UI.canvas.width / 2) - (logo.img.width / 2);
			logo.y = 60;

			logo.eventBox = new EventBox(_this.UI, logo);
			logo.eventBox
				.addEventArea(logo.x, logo.y, logo.img.width, logo.img.height)
				.addEventAction('click', function(){
					alert('cliquei em img');
				});

			_this.addEvent( new Event().addEventables(logo) );

			// adding to UI Elements stack
			_this.addToRender( logo );
		});
		

		//setting up text start
		var startButton = new UIElement(this.UI);

		startButton.addText({
            text: 'Start',
            textFormat: 'bold 58px chantal',
            color: this.UI.colorMainLight
        });

		startButton.x = (_this.UI.canvas.width / 2) - (startButton.infos.width / 2);
		startButton.y = 400;

		startButton.eventBox = new EventBox(this.UI, startButton);
		startButton.eventBox
			.addEventArea(startButton.x, startButton.y - 40, startButton.infos.width, 40)
			.addEventAction({
				click: function(){
					_this.UI.goToNextInterface().initScreen()
					.clearEvent('click', eventsHandler.click)
				}
			});

		this.addEvent( new Event().addEventables(startButton) );

		this.addToRender(startButton);
	};

	Start.prototype.eventManager = function(){
		var _this = this;

		eventsHandler.click = function(event){
			for (var i = _this.events.length - 1; i >= 0; i--) {
				_this.events[i].onHit(event, 'click');
			}
		}

		this.UI.canvas.addEventListener('click', eventsHandler.click, false);
	}

return Start;

})();
