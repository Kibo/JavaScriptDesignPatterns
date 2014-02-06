var p, t, frag;

frag = document.createDocumentFragment( );

p = document.createElement( 'p' );
t = document.createTextNode( 'first paragraph' );
p.appendChild( t );
frag.appendChild( p );

p = document.createElement( 'p' );
t = document.createTextNode( 'second paragraph' );
p.appendChild( t );
frag.appendChild( p );

document.body.appendChild( frag ); 