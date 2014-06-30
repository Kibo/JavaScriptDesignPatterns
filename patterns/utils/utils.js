// ################################################
/*
 * Shorthand function
 */
var $ = function( id ) {
	return document.getElementById( id );
};

$( 'content' ).getElementsByTagName( 'a' ); 

// ################################################

/**
 * Checks null and undefined
 * @param {Object} x
 * @return {boolean}
 */
function existy(x) { 
	return x != null; 
};

existy(null);
//=> false

existy(undefined);
//=> false

existy({}.notHere);
//=> false

existy((function(){})());
//=> false

existy(0);
//=> true

existy(false);
//=> true

// ################################################

/**
 * Determine if something should be considered as true
 * @param {Object} x
 * @return {boolean}
 */
function truthy(x) { 
	return (x !== false) && existy(x);
};

truthy(false);
//=> false

truthy(undefined);
//=> false

truthy(0);
//=> true

truthy('');
//=> true
