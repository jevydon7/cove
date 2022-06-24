
// *****************************
var express = require('express');
const path = require('path');
var app = express();
port = process.env.port || 8080;

//route variables
const homePage = require('./routes/home')
const loginpage = require('./routes/login')
const programs = require ('./routes/program')
// ***********************************************
// static files

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//*********************************************** */
// this routing
app.use('/', homePage)
app.use('/login', loginpage)
app.use('/programs', programs)





app.listen(port,()=>{
    console.log(`listening to localhost http://localhost:${port}`)
})