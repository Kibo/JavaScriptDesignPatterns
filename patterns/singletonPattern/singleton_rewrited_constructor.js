/**
 * Inspired by book JavaScript Patterns by Stoyan Stefanov
 * @see http://shop.oreilly.com/product/9780596806767.do
 */
function Universe( ) {
	// the cached instance
	var instance;

	// rewrite the constructor
	Universe = function Universe( ) {
		return instance;
	};

	// carry over the prototype properties
	Universe.prototype = this;

	// the instance
	instance = new Universe( );

	// reset the constructor pointer
	instance.constructor = Universe;

	// all the functionality
	instance.start_time = 0;
	instance.bang = "Big";

	return instance;
}

/**
 * ECMAScript documentation
 * @see http://bclary.com/2004/11/07/#a-13.2.2
 * 
 * 13.2.2 [[Construct]]
 * When the [[Construct]] internal method for a Function object F is called with a possibly empty list of arguments,
 * the following steps are taken:
 * 1. Let obj be a newly created native ECMAScript object.
 * 2. Set all the internal methods of obj as specified in 8.12.
 * 3. Set the [[Class]] internal property of obj to "Object".
 * 4. Set the [[Extensible]] internal property of obj to true.
 * 5. Let proto be the value of calling the [[Get]] internal property of F with argument "prototype".
 * 6. If Type(proto) is Object, set the [[Prototype]] internal property of obj to proto.
 * 7. If Type(proto) is not Object, set the [[Prototype]] internal property of obj to the standard built-in Object prototype object as described in 15.2.4.
 * 8. Let result be the result of calling the [[Call]] internal property of F, providing obj as the this value and providing the argument list passed into [[Construct]] as args.
 * 9. If Type(result) is Object then return result.
 * 10. Return obj.
 */