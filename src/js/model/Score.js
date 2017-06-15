function Score(){
    this.points = 0;
    this.winPoints = 3;
    this.tiePoints = 1;
}

Score.prototype = {
    getPoints: function(){
        return this.points;
    },
    
    setPoints: function(points){
        this.points = points;
    },
    
    winRound: function(){
        this.setPoints( this.getPoints() + this.winPoints )
    },
    
    tieRound: function(){
        this.setPoints( this.getPoints() + this.tiePoints )
    }
}