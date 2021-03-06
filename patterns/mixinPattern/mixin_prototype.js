/**
 * @constructor
 */
var Person = function( name ){
	this.name = name;	
}

var Mixin = function(){};
Mixin.prototype = {
	hello:function(){
		console.log("hallo");
	},
	
	googbye:function(){
		console.log("goodbye");
	},
}


mixin(Person, Mixin, ["hello"]);

/**
 * Augment existing 'class' with a method from another
 * 
 * @param {Object} receivingClass
 * @param {Object} givingClass
 * @param {Array<String>} methodNames - ["trigger","bind","unbind"]
 */
function mixin (receivingClass, givingClass, methodNames){
		    			    			    
	for (var i=0; i < methodNames.length; i++) {
		if( typeof givingClass.prototype[methodNames[i]]  != "function"){
			throw new Error( "Class has not prototype method with name " + methodNames[i] );
		}
		
		delete receivingClass.prototype[methodNames[i]];	    				    		
		receivingClass.prototype[methodNames[i]] = givingClass.prototype[methodNames[i]]	
	}	    		
};

//-- EXAMPLE --
var john = new Person("John Lennon");	
john.hello();	

