/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
 */

function Sale( price ) {
	this.price = price || 100;
	this.decorators_list = [ ];
}

Sale.prototype.decorate = function( decorator ) {
	this.decorators_list.push( decorator );
};

Sale.prototype.getPrice = function( ) {
	var price = this.price, i, max = this.decorators_list.length, name;

	for( i = 0; i < max; i += 1 ) {
		name = this.decorators_list[ i ];
		price = Sale.decorators[ name ].getPrice( price );
	}

	return price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice: function( price ) {
		return price + price * 5 / 100;
	}
};

Sale.decorators.cdn = {
	getPrice: function( price ) {
		return "$" + price.toFixed( 2 );
	}
};

var sale = new Sale( 100 );
sale.decorate( 'fedtax' );
sale.decorate( 'cdn' );
sale.getPrice( ); // $105.00

/*
 * If you want to have more methods that can be
 * decorated, then the part of going through the list of decorators should be repeated by
 * each additional method. However, this can be easily abstracted into a helper method
 * that takes a method and makes it “decoratable.” In such an implementation the decorators_list property 
 * would become an object with properties named after the methods
 * and values being arrays of decorator objects.
 */