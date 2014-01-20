/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
 */
function extendDeep( parent, child ) {
	var i, 
	toStr = Object.prototype.toString, 
	astr = "[object Array]";

	child = child || {};

	for( i in parent ) {
		if( parent.hasOwnProperty( i ) ) {
			if( typeof parent[ i ] === "object" ) {
				child[ i ] = ( toStr.call( parent[ i ] ) === astr ) ? [ ] : {};
				extendDeep( parent[ i ], child[ i ] );
			} else {
				child[ i ] = parent[ i ];
			}
		}
	}
	return child;
}

