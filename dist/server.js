'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseModels = require('./mongooseModels');

var _mongooseModels2 = _interopRequireDefault(_mongooseModels);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _objection = require('objection');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _normalizePort = require('normalize-port');

var _normalizePort2 = _interopRequireDefault(_normalizePort);

var _organism = require('./loopback-models/organism.json');

var _organism2 = _interopRequireDefault(_organism);

var _mysqlConfig = require('./mysql-config.json');

var _mysqlConfig2 = _interopRequireDefault(_mysqlConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//knex and mysql

// mongodb database driver
/* jshint esversion: 6 */
/* jshint ignore: start */

var app = (0, _express2.default)(); // mongodb object data modeler
// web server framework


var jsonParser = _bodyParser2.default.json();

//app.use( bodyParser.urlencoded({ extended: true }) );
//app.use( bodyParser.json() );

// Database

// mongodb
var mongodbUserName = 'slank';
var mongodbUserPassword = 'yoohunfer1';
var mongodbName = 'web-directory';
var mongodbUrl = 'mongodb://' + mongodbUserName + ':' + mongodbUserPassword + '@ds123728.mlab.com:23728/' + mongodbName;
_mongoose2.default.connect(mongodbUrl, function (error) {
  if (error) console.error(error);
  console.log('connection to mongodb via mongoose successful');
});
_mongoose2.default.connection.on('error', console.error.bind(console, 'connection error:'));
_mongoose2.default.connection.once('open', function () {
  console.log('open connection to mongodb via mongoose successful');
});

// mysql

var mysqlPool = _mysql2.default.createPool({
  connectionLimit: 100,
  host: _mysqlConfig2.default.hostName,
  user: _mysqlConfig2.default.userName,
  password: _mysqlConfig2.default.userPassword,
  database: _mysqlConfig2.default.databaseName /*,
                                               ssl: { // why am I given these ssl keys if I don't need them to connect?
                                               ca: fs.readFileSync( `${__dirname}/mysql/cleardb/cleardb-ca.pem` ),
                                               key: fs.readFileSync( `${__dirname}/mysql/cleardb/bf625d1cf3ab45-key.pem` ),
                                               cart: fs.readFileSync( `${__dirname}/mysql/cleardb/bf625d1cf3ab45-cert.pem` )
                                               }*/
});

// End Database


// Routers

app.get('/web-directory', function (request, response) {
  response.sendFile();
});

app.get('/api/fetchTodoList', function (request, response) {
  console.log('/api/fetchTodoList');
  _mongooseModels2.default.Todo.find(function (error, documents) {
    if (error) return console.error(error);
    response.send(documents);
  });
});
app.post('/api/fetchAddTodo', jsonParser, function (request, response) {
  console.log('/api/fetchAddTodo');
  console.log(request.body);
  var todo = new _mongooseModels2.default.Todo({ text: request.body.text });
  todo.save(function (error, documents) {
    if (error) return console.error(error);
    response.send(documents);
  });
});

app.get('/api/getOrganisms', function (request, response) {});
// End Routers

// get port from environment and store in Express.
var port = (0, _normalizePort2.default)(process.env.PORT || '8080'); // process.env.PORT lets the port be set by Heroku
app.set('port', port);

app.listen(port, function () {
  return console.log('Listening on port ' + port + '!');
});
