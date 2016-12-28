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
		var logo = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.imgSrc = 'img/logo.png',
                this.type = 'img'
            },
            
            onload: function(){
                this.x = (_this.UI.canvas.width / 2) - (this.img.width / 2);
                this.y = 60;

                this.eventBox = new EventBox(_this.UI, this);
                this.eventBox
                    .addEventArea(this.x, this.y, this.img.width, this.img.height)
                    .addEventAction({
                        click: function(){
                            alert('ok');
                        }
                    });

                _this.addEvent( new Event().addEventables(this) );

                // adding to UI Elements stack
                _this.addToRender( this );
            }
        });
        
		//setting up text start
		var startButton = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: 'Start',
                    textFormat: 'bold 58px chantal',
                    color: _this.UI.colorMainLight
                }
            },
            onload: function(){
                this.x = (_this.UI.canvas.width / 2) - (this.infos.width / 2),
                this.y = 400
            }
        });
        
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
