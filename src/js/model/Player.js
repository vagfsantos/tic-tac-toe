function Player(){
	this._team = null;
}

Player.prototype = {
	setTeamAs: function(team){
		if( team == 'o' || team == 'x' ){
			this._team = team;
			return this;
		}else{
			throw new Error('The team must be "x" or "o"');
		}
	}
}