/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
 */
MYAPP.utilities.Array = ( function( ) {
		// dependencies
		var uobj = MYAPP.utilities.object, 
		ulang = MYAPP.utilities.lang,
		
		// private properties and methods...
		Constr;
		
		// end var
			
		// public API -- constructor
		Constr = function( o ) {
			this.elements = this.toArray( o );
		};
		
		// public API -- prototype
		Constr.prototype = {
			constructor: MYAPP.utilities.Array,
			version: "2.0",
			toArray: function( obj ) {
				for( var i = 0, a = [ ], len = obj.length; i < len; i += 1 ) {
					a[ i ] = obj[ i ];
				}
				return a;
			}
		};
		// return the constructor
		// to be assigned to the new namespace
		return Constr;
	}( ) ); 
	
var arr = new MYAPP.utilities.Array(obj);