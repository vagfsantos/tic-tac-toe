var PlayGame = (function(){

	var eventsHandler = {};

	function PlayGame(UI, Player, PlayerMachine){
		this.UI = UI;
		this.player = Player;
		this.PlayerMachine = PlayerMachine;
		this.logo;
	}

	PlayGame.prototype = new Interface();

	PlayGame.prototype.preload = function(){
		var _this = this;

		// setting up logo
		var logo = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.imgSrc = 'img/playgame-logo.png',
                this.type = 'img';
                this.x = 10;
                this.y = 5;
            },
            
            onload: function(){
                // adding to UI Elements stack
                _this.addToRender( this );
            }
        });

		// Title score
		var scoreTitle = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: 'Score',
                    textFormat: '43px chantal',
                    color: this.UI.colorHighlight
                }
                this.x = 20;
                this.y = 230;
            }
        });
		

		// Player points text
		var playerScoreText = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: 'You',
                    textFormat: '27px chantal',
                    color: this.UI.colorLight
                }
                this.x = 20;
                this.y = 285;
            }
        });
        
        // Player points current Score
		var playerScorePoints = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: '0',
                    textFormat: '45px chantal',
                    color: this.UI.colorMainLight
                }
                this.x = 150;
                this.y = 290;
            }
        });
        

		// Machine points text
		var machineScoreText = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: 'Machine',
                    textFormat: '27px chantal',
                    color: this.UI.colorLight
                }
                this.x = 20;
                this.y = 325;
            }
        });
        
        // Machine points current Score
		var machineScorePoints = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: '0',
                    textFormat: '45px chantal',
                    color: this.UI.colorMainLight
                }
                this.x = 150;
                this.y = 330;
            },
            
            update: function(){
                this.setText(_this.PlayerMachine.getScore());
            }
        });

		// Level title text
		var levelTitleText = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: 'Level',
                    textFormat: '27px chantal Light',
                    color: this.UI.colorLight
                }
                this.x = 20;
                this.y = 438;
            }
        });

		// Level type text
		var levelTypeText = UIElementUtil.createNewElement(this.UI, {
            setup: function(){
                this.type = 'text',
                this.textSetup =  {
                    text: 'Normal',
                    textFormat: '35px chantal',
                    color: this.UI.colorHighlight
                }
                this.x = 20;
                this.y = 475;
            }
        });

		this.addToRender(
                scoreTitle,
                playerScoreText,
                playerScorePoints,
                machineScorePoints,
                machineScoreText,
                levelTitleText,
                levelTypeText
            );
	};

	PlayGame.prototype.eventManager = function(){
		var _this = this;

		eventsHandler.click = function(event){
			for (var i = _this.events.length - 1; i >= 0; i--) {
				_this.events[i].onHit(event, 'click');
			}
		}

		this.UI.canvas.addEventListener('click', eventsHandler.click, false);
	};


	return PlayGame;
})();
