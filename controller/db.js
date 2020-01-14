const sql =require('mssql');
require('dotenv').config();
const dev={
  user: 'sa',
  password: 'Invi#17Tra',
  server: 'APPSERVER',
  database: 'webcem_tracking',
  port:1433
}
const prod={
  user: 'sa',
  password: 'QbTrs3d9',
  server: '10.105.65.195',
  database: 'webcem_tracking',
  port:1433,
  pool: {
    idleTimeoutMillis: 300000,
    max: 100
  }
}
let _config=process.env.LOCAL=='true'?dev:prod;
var pools = new sql.ConnectionPool(_config).connect().then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
sql, pools
}  