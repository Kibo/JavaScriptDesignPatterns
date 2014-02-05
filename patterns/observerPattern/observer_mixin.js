var publisher = {

	subscribe: function( fn, type ) {
		type = type || 'any';

		if( typeof this.subscribers[ type ] === "undefined" ) {
			this.subscribers[ type ] = [ ];
		}

		this.subscribers[ type ].push( fn );
	},

	unsubscribe: function( fn, type ) {
		var pubtype = type || 'any';
		var subscribers = this.subscribers[ pubtype ];
		var max = subscribers.length;

		for( i = 0; i < max; i += 1 ) {
			if( subscribers[ i ] === fn ) {
				subscribers.splice( i, 1 );
			}
		}
	},

	publish: function( publication, type ) {
		var pubtype = type || 'any';
		var subscribers = this.subscribers[ pubtype ];
		var max = subscribers.length;

		for( i = 0; i < max; i += 1 ) {
			subscribers[i]( publication );
		}
	},
};

function makePublisher( o ) {
	var i;
	for( i in publisher ) {
		if( publisher.hasOwnProperty( i ) && typeof publisher[ i ] === "function" ) {
			o[ i ] = publisher[ i ];
		}
	}
	o.subscribers = {
		any: [ ]
	};
}

/* ## Example ################ */
var paper = {
	
	daily: function( ) {
		this.publish( "big news today" );
	},
	
	monthly: function( ) {
		this.publish( "interesting analysis", "monthly" );
	}
};

makePublisher(paper);

var joe = {
	readNews:function(newspaper){
		console.log("I read newspaper " + newspaper);
	},
	
	readMagazine:function(magazine){
		console.log("I read magazine " + magazine);		
	},	
};

// Joe want to become a subscriber
paper.subscribe(joe.readNews);
paper.subscribe(joe.readMagazine, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();



