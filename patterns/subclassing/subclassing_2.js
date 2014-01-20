// every time it creates a temporaty proxy
function inherit( Child, Parent ) {
	var F = function( ) {
	};
	F.prototype = Parent.prototype;
	Child.prototype = new F( );
	Child.parent = Parent.prototype;
	Child.prototype.constructor = Child;
}

// Do you want to be a perfect ?
// proxy in closure - only once
var inherit = ( function( ) {
		var F = function( ) {};
		return function( Child, Parent ) {
			F.prototype = Parent.prototype;
			Child.prototype = new F( );
			Child.parent = Parent.prototype;
			Child.prototype.constructor = Child;
		};
	}( ) ); 