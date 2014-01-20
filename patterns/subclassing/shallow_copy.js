function extend( parent, child ) {
	var i;
	child = child || {};
	for( i in parent ) {
		if( parent.hasOwnProperty( i ) ) {
			child[ i ] = parent[ i ];
		}
	}
	return child;
}