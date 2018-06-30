import loopback from 'loopback'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'


// Paths
const rootPath = path.join( __dirname, '..' ) // up one level from util directory
const serverPath = path.join( rootPath, 'src', 'server' )
const modelsPath = path.join( serverPath, 'loopback-models' )
const modelConfigPath = path.join( serverPath, 'model-config.json' )
const datasourcesPath = path.join( serverPath, 'datasources.json' )
// End Paths

// Promisify
const writeFile = promisify( fs.writeFile )
const readFile = promisify( fs.readFile )
const mkdirp = promisify( require( 'mkdirp' ))
// End Promisify

const DATASOURCE_NAME = 'gwpd-mysql-cleardb';
const dataSourceConfig = require( datasourcesPath )
const ds = loopback.createDataSource( dataSourceConfig[DATASOURCE_NAME] )

discover().then(
  success => process.exit(),
  error => { console.error( 'UNHANDLED ERROR:\n', error ); process.exit( 1 ); },
);

async function discover() {
  // It's important to pass the same "options" object to all calls
  // of dataSource.discoverSchemas(), it allows the method to cache
  // discovered related models
  const options = {relations: true};
  
  // Discover models and relations
  const tableNames =[
    'disinfection',
    'genome_type',
    'gram_stain_group',
    'organism',
    'organism_common',
    'organism_family',
    'organism_genus',
    'organism_species',
    'organism_subfamily',
    'organism_type'
  ]

  await mkdirp( modelsPath )

  ds.connect(( error, db ) => {
    if ( error ) throw error
        
  })

  for ( var i = 0; i < tableNames.length; await i++ ) {
    
    var tableName = tableNames[ i ]

    console.log( await `discover schema for tableName: ${tableName}` )
    var tableSchema = await db.discoverSchemas( tableName, options )
    
    // Create model definition files
    console.log( await `writing file` )
    await writeFile(
      path.join( modelsPath, `${tableName}.json` ),
      JSON.stringify( tableSchema[`heroku_b2cf77a96af7a57.${tableName}`], null, 2 )
    )
    
  }

  // Expose models via REST API
  const configJson = await readFile( modelConfigPath, 'utf-8' )
  console.log( 'MODEL CONFIG', configJson )
  const config = JSON.parse( configJson )
  tableNames.forEach( tableName => {
    config[ tableName ] = {dataSource: DATASOURCE_NAME, public: true};
  })
  
  await writeFile(
    modelConfigPath,
    JSON.stringify( config, null, 2 )
  );
}