function Player(autoPlay){
	this._team = null;
    this._score = new Score();
    this._autoPlay = autoPlay || false;
}

Player.prototype = {
	setTeam: function(team){
		if( team == 'o' || team == 'x' ){
			this._team = team;
			return this;
		}else{
			throw new Error('The team must be "x" or "o"');
		}
	},
    
    getScore: function(){
        return this._score.getPoints();
    }
}