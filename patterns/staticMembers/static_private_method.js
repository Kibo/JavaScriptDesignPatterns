// constructor
var Gadget = ( function( ) {
		// static variable/property
		var counter = 0, NewGadget;

		// this will become the
		// new constructor implementation
		NewGadget = function( ) {
			counter += 1;
		};

		// a privileged method
		NewGadget.prototype.getLastId = function( ) {
			return counter;
		};

		// overwrite the constructor
		return NewGadget;
	}( ) ); // execute immediately
	
/* ---------------------------- */
var iphone = new Gadget();
iphone.getLastId(); // 1

var ipod = new Gadget();
ipod.getLastId(); // 2

var ipad = new Gadget();
ipad.getLastId(); // 3