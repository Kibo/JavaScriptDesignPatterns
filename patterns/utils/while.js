/**
 * @constructor
 */
var Player = function( name, color ) {
	this.name = name;
	this.color = color;
};

/*
 * It creates player dynamically
 */
var playername, color;
var players = [ ];

while( 1 ) {
	playername = prompt( "Add player (name)" );
	if( !playername ) {
		break;
	}
	while( 1 ) {
		color = prompt( "Color for " + playername + "?" );
		if( color ) {
			break;
		}
	}
	players.push( new Player( playername, color ) );
}

console.log( players.length ); 