/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
 */

function Sale( price ) {
	this.price = price || 100;
}

Sale.prototype.getPrice = function( ) {
	return this.price;
};

Sale.prototype.decorate = function( decorator ) {

	var overrides = this.constructor.decorators[ decorator ];
	var i;
	var newobj;

	var F = function( ) {
	};
	F.prototype = this;

	newobj = new F( );
	newobj.parent = F.prototype;

	// copy properties to instance
	for( i in overrides ) {
		if( overrides.hasOwnProperty( i ) ) {
			newobj[ i ] = overrides[ i ];
		}
	}

	return newobj;
};

// add property to Sale function ( this.constructor.decorators )
Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice: function( ) {
		var price = this.parent.getPrice( );
		price += price * 5 / 100;
		return price;
	}
};

Sale.decorators.cdn = {
	getPrice: function( ) {
		return "CDN$ " + this.parent.getPrice( ).toFixed( 2 );
	}
};

var sale = new Sale( 100 );
sale = sale.decorate( 'fedtax' );
sale = sale.decorate( 'cdn' );
sale.getPrice( );												// CDN$ 105.00

sale.constructor === Sale;										// true
sale.constructor.prototype === Sale.prototype;					// true 

sale.constructor.decorators.fedtax === Sale.decorators.fedtax;	// true 
sale.constructor.decorators.cdn === Sale.decorators.cdn;		// true

sale.getPrice === Sale.decorators.cdn.getPrice;					// true
sale.parent.getPrice === Sale.decorators.fedtax.getPrice;		// true
sale.parent.parent.getPrice === Sale.prototype.getPrice;		// true
