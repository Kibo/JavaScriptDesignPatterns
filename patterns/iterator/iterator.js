var oddAggregator = ( function( ) {
		var index = 0, 
		data = [ 1, 2, 3, 4, 5 ], 
		length = data.length;

		return {

			next: function( ) {
				var element;
				if( !this.hasNext( ) ) {
					return null;
				}
				element = data[ index ];
				index = index + 2; // 0, 2, 4
				return element;
			},

			hasNext: function( ) {
				return index < length;
			},

			rewind: function( ) {
				index = 0;
			},

			current: function( ) {
				return data[ index ];
			}
		};
	}( ) );

// this loop logs 1, then 3, then 5
while( oddAggregator.hasNext( ) ) {
	console.log( oddAggregator.next( ) );
}

oddAggregator.rewind( );					// go back
console.log( oddAggregator.current( ) );	// 1
