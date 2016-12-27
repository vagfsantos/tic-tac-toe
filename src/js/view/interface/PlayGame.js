var PlayGame = (function(){

	var eventsHandler = {};

	function PlayGame(UI, Player){
		this.UI = UI;
		this.player = Player;
		this.logo;
	}

	PlayGame.prototype = new Interface();

	PlayGame.prototype.preload = function(){
		var _this = this;

		// setting up logo
		this.logo = new UIElement(this.UI);
		this.logo.addImage('img/playgame-logo.png').onload(function(){
			_this.logo.x = 10;
			_this.logo.y = 5;
			
			// adding to UI Elements stack
			_this.addToRender( _this.logo );
		});

		// Title score
		this.scoreTitle = new UIElement(this.UI);
		this.scoreTitle.addText({
            text: 'Score',
            textFormat: '43px chantal',
            color: this.UI.colorHighlight
        });
		this.scoreTitle.x = 20;
		this.scoreTitle.y = 230;

		// Player points text
		this.playerScoreText = new UIElement(this.UI);
		this.playerScoreText.addText({
            text: 'You',
            textFormat: '27px chantal',
            color: this.UI.colorLight
        });
		this.playerScoreText.x = 20;
		this.playerScoreText.y = 285;

		// Machine points text
		this.machineScoreText = new UIElement(this.UI);
		this.machineScoreText.addText({
            text: 'Machine',
            textFormat: '27px chantal',
            color: this.UI.colorLight
        });
		this.machineScoreText.x = 20;
		this.machineScoreText.y = 325;

		// Level title text
		this.levelTitleText = new UIElement(this.UI);
		this.levelTitleText.addText({
            text: 'Level',
            textFormat: '27px chantal Light',
            color: this.UI.colorLight
        });
		this.levelTitleText.x = 20;
		this.levelTitleText.y = 438;

		// Level type text
		this.levelTypeText = new UIElement(this.UI);
		this.levelTypeText.addText({
            text: 'Normal',
            textFormat: '35px chantal',
            color: this.UI.colorHighlight
        });
		this.levelTypeText.x = 20;
		this.levelTypeText.y = 475;


		this.addToRender(
                this.scoreTitle,
                this.playerScoreText,
                this.machineScoreText,
                this.levelTitleText,
                this.levelTypeText
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
