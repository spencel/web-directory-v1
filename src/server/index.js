/* jshint esversion: 6 */
/* jshint ignore: start */

import express from 'express' // web server framework
import mongodb from 'mongodb' // mongodb database driver
import mongoose from 'mongoose' // mongodb object data modeler
import mongooseModels from './mongooseModels'
import mysql from 'mysql'
import Knex from 'knex'
import { Model } from 'objection'
import bodyParser from 'body-parser'
import normalizePort from 'normalize-port'
import organism from './loopback-models/organism.json'
//knex and mysql

const app = express();

const jsonParser = bodyParser.json();

//app.use( bodyParser.urlencoded({ extended: true }) );
//app.use( bodyParser.json() );

// Database

// mongodb
var mongodbUserName = 'slank'
var mongodbUserPassword = 'yoohunfer1'
var mongodbName = 'web-directory'
var mongodbUrl = `mongodb://${mongodbUserName}:${mongodbUserPassword}@ds123728.mlab.com:23728/${mongodbName}`
mongoose.connect( mongodbUrl, ( error ) => {
  if ( error ) console.error( error )
  console.log( 'connection to mongodb via mongoose successful' )
})
mongoose.connection.on( 'error', console.error.bind( console, 'connection error:' ))
mongoose.connection.once( 'open', () => {
  console.log( 'open connection to mongodb via mongoose successful' )
})

// mysql
import mysqlConfig from './mysql-config.json'
var mysqlPool = mysql.createPool({
	connectionLimit: 100,
	host: mysqlConfig.hostName,
	user: mysqlConfig.userName,
	password: mysqlConfig.userPassword,
	database: mysqlConfig.databaseName/*,
	ssl: { // why am I given these ssl keys if I don't need them to connect?
		ca: fs.readFileSync( `${__dirname}/mysql/cleardb/cleardb-ca.pem` ),
		key: fs.readFileSync( `${__dirname}/mysql/cleardb/bf625d1cf3ab45-key.pem` ),
		cart: fs.readFileSync( `${__dirname}/mysql/cleardb/bf625d1cf3ab45-cert.pem` )
	}*/
});

// End Database


// Routers

app.get( '/web-directory', ( request, response ) => {
	response.sendFile( )
})

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
  var todo = new mongooseModels.Todo({ text: request.body.text })
  todo.save(( error, documents ) => {
    if ( error ) return console.error( error )
    response.send( documents )
  })
})

app.get( '/api/getOrganisms', ( request, response ) => {
  
})
// End Routers

// get port from environment and store in Express.
var port = normalizePort( process.env.PORT || '8080' ); // process.env.PORT lets the port be set by Heroku
app.set( 'port', port );

app.listen( port, () => console.log( `Listening on port ${port}!` ));
