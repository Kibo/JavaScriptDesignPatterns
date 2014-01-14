/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
*/
var MYAPP = MYAPP || {};

MYAPP.namespace = function( ns_string ) {
	var parts = ns_string.split( '.' ), 
	parent = MYAPP; 
		
	// strip redundant leading global
	if( parts[ 0 ] === "MYAPP" ) {
		parts = parts.slice( 1 );
	}
	for( var i = 0; i < parts.length; i += 1 ) {
		// create a property if it doesn't exist
		if( typeof parent[ parts[ i ] ] === "undefined" ) {
			parent[ parts[ i ] ] = {};
		}

		parent = parent[ parts[ i ] ];
	}
	return parent;
}; 

// assign returned value to a local var
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true

// skip initial `MYAPP`
MYAPP.namespace('modules.module51');