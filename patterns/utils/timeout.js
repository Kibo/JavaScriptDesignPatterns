/**
 * Nice example of using setTimeout
 */
var proxy = {

	ids: [ ],
	delay: 50,
	timeout: null,

	makeRequest: function( id, callback, context ) {

		// add to the queue
		this.ids.push( id );

		// set up timeout
		if( !this.timeout ) {
			this.timeout = setTimeout( function( ) {
				proxy.flush( );
			}, this.delay );
		}
	},

	flush: function( ) {
		http.makeRequest( this.ids, "proxy.handler" );
		// clear timeout and queue
		this.timeout = null;
		this.ids = [ ];
	},
};
