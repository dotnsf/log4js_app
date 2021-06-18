//. app.js
var express = require( 'express' ),
    app = express();

//. logger
var logger = require( './logger' );

//. enable routing
app.use( express.Router() );

app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf8' ) ;
  var obj = { status: true, message: 'Hello World!' };
  logger.info( JSON.stringify( obj ) );
  res.write( JSON.stringify( obj, null, 2 ) );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
logger.debug( "server starting on " + port + " ..." );
console.log( "server starting on " + port + " ..." );

