var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dophlincove',
})

conn.connect((err)=>{
    if(!err)
      console.log('connect to database successfully')

    else
      console.log('connection failed' + JSON.stringify(err,undefined,2))
})

module.exports = conn