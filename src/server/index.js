/* jshint esversion: 6 */
/* jshint ignore: start */

import express from 'express' // web server framework
import mongodb from 'mongodb' // mongodb database driver
import mongoose from 'mongoose' // mongodb object data modeler
import mongooseModels from './mongooseModels'
import bodyParser from 'body-parser'
import normalizePort from 'normalize-port'
//knex and mysql

const app = express();

app.use( express.static( 'dist' ));

const jsonParser = bodyParser.json();

//app.use( bodyParser.urlencoded({ extended: true }) );
//app.use( bodyParser.json() );

// Database

var mongodbUserName = 'slank';
var mongodbUserPassword = 'yoohunfer1';
var mongodbName = 'web-directory';
var mongodbUrl = `mongodb://${mongodbUserName}:${mongodbUserPassword}@ds123728.mlab.com:23728/${mongodbName}`;
mongoose.connect( mongodbUrl, ( error ) => {
  if ( error ) console.error( error )
  console.log( 'connection to mongodb via mongoose successful' )
})
mongoose.connection.on( 'error', console.error.bind( console, 'connection error:' ))
mongoose.connection.once( 'open', () => {
  console.log( 'open connection to mongodb via mongoose successful' )
})
// End Database


// Routers

app.get( '/api/fetchTodoList', ( request, response ) => {
  console.log( '/api/fetchTodoList' )
  mongooseModels.Todo.find(( error, documents ) => {
    if ( error ) return console.error( error )
    response.send( documents )
  })
})
app.post( '/api/fetchAddTodo', jsonParser, ( request, response ) => {
  console.log( '/api/fetchAddTodo' )
  console.log( request.body )
  mongooseModels.Todo.save(( error, documents ) => {
    if ( error ) return console.error( error )
    response.send( documents )
  })
})
// End Routers

// get port from environment and store in Express.
var port = normalizePort( process.env.PORT || '8080' ); // process.env.PORT lets the port be set by Heroku
app.set( 'port', port );

app.listen( port, () => console.log( `Listening on port ${port}!` ));
