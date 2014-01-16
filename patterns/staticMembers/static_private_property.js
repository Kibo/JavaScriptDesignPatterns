var Gadget = (function () {

// static variable/property
var counter = 0;

// returning the new implementation
// of the constructor
return function () {
	console.log(counter += 1);
};

}()); // execute immediately

/* ------------ */
var g1 = new Gadget(); // logs 1
var g2 = new Gadget(); // logs 2
var g3 = new Gadget(); // logs 3