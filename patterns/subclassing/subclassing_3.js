/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
 */
var klass = function( Parent, props ) {

	var Child, F, i;

	// 1.
	// new constructor
	Child = function( ) {
		if( Child.parent && Child.parent.hasOwnProperty( "__construct" ) ) {
			Child.parent.__construct.apply( this, arguments );
		}
		if( Child.prototype.hasOwnProperty( "__construct" ) ) {
			Child.prototype.__construct.apply( this, arguments );
		}
	};

	// 2.
	// inherit
	Parent = Parent || Object;

	F = function( ) {};
	F.prototype = Parent.prototype;
	Child.prototype = new F( );
	Child.parent = Parent.prototype;
	Child.prototype.constructor = Child;

	// 3.
	// add implementation methods
	for( i in props ) {
		if( props.hasOwnProperty( i ) ) {
			Child.prototype[ i ] = props[ i ];
		}
	}

	// return the "class"
	return Child;
};

var Man = klass( null, {
	__construct: function( name ) {
		console.log( "Man's constructor" );
		this.name = name;
	},
	getName: function( ) {
		return this.name;
	}
} );

var man = new Man( 'Adam' );
console.log( man.getName( ) );

var SuperMan = klass( Man, {

	__construct: function( name ) {
		console.log( "SuperMan's constructor" );
	},

	getName: function( ) {
		var name = SuperMan.parent.getName.call( this );
		return "I am " + name;
	}
} );

var superman = new SuperMan( 'Clark' );
console.log( superman.getName( ) );

