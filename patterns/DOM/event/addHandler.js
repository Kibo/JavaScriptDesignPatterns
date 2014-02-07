var b = document.getElementById( 'clickme' );

if( document.addEventListener ) {// W3C
	b.addEventListener( 'click', myHandler, false );

} else if( document.attachEvent ) {// IE
	b.attachEvent( 'onclick', myHandler );

} else {// last resort
	b.onclick = myHandler;
}

function myHandler( e ) {

	/*
	 * This event object is passed
	 * to the callback event handler, but not when using the onclick property 
	 * where it’s accessible through the global property window.event instead.
	 */
	e = e || window.event;

	// do something ...
}