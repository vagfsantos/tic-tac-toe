var PickYourSide = (function(){

	var eventsHandler = {};

	function PickYourSide(UI, Player, PlayerMachine){
		this.UI = UI;
		this.player = Player;
		this.PlayerMachine = PlayerMachine;
		this.logo;
	}

	PickYourSide.prototype = new Interface();

	PickYourSide.prototype.preload = function(){
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
                            alert('ok screen 2');
                        }
                    });

                _this.addEvent( new Event().addEventables(this) );

                // adding to UI Elements stack
                _this.addToRender( this );
            }
        });
        
        
		// info text
		var infoText = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text';
                this.textSetup = {
                    text: 'Pick Your Side',
                    textFormat: '38px chantal',
                    color: this.UI.colorMainLight
                };
            },
            
            onload: function(){
                this.x = (_this.UI.canvas.width / 2) - (this.infos.width / 2);
                this.y = 300;
            }
        });
		

		//x option
		var btnX = UIElementUtil.createNewElement(this.UI,{
            setup: function(){
                this.imgSrc = 'img/btn-x.png';
                this.type = 'img';
            },
            onload: function(){
                this.x = (_this.UI.canvas.width / 2) - this.img.width - 15;
                this.y = 330;
                
                this.eventBox = new EventBox(_this.UI, this);
                this.eventBox
                    .addEventArea(this.x, this.y, this.img.width, this.img.height)
                    .addEventAction({
                        click: function(){
                            _this.player.setTeam('x');
                            _this.PlayerMachine.setTeam('o');

                            _this.UI.goToNextInterface().initScreen()
                                    .clearEvent('click', eventsHandler.click)
                        }
                    });

                _this.addEvent( new Event().addEventables(this) );

                // adding to UI Elements stack
                _this.addToRender( this );
            }
        });

		//O option
		var btnO = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.imgSrc = 'img/btn-o.png';
                this.type = 'img';
            },
            
            onload: function(){
                this.x = (_this.UI.canvas.width / 2) + 15;
			    this.y = 330;
                
                // adding event
                this.eventBox = new EventBox(_this.UI, this);
                this.eventBox
                    .addEventArea(this.x, this.y, this.img.width, this.img.height)
                    .addEventAction({
                        click: function(){
                            _this.player.setTeam('o');
                            _this.PlayerMachine.setTeam('x');
                            
                            _this.UI.goToNextInterface().initScreen()
                                    .clearEvent('click', eventsHandler.click)
                        }
                    });

                _this.addEvent( new Event().addEventables(this) );

                // adding to UI Elements stack
                _this.addToRender( this );
            }
        });

		this.addToRender(infoText);
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
