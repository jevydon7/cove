const express = require('express');
const router = express.Router();
const db = require('../database/dbs');

var sql = 'SELECT * FROM dophlincove.program'

router.get('/',(req,res)=>{

db.query(sql,(err,result)=>{
    if(err){console.log('err')}
    console.log(result)
    res.render('programs',{ programs:result})
})

   
})

module.exports = router