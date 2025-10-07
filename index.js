const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configs/db');
const port = 2020;
const app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))


app.use('/',require('./routers/index.routes'))

app.listen(port,(err)=>{
    if(!err){
        db()
        console.log("Server started..")
        console.log("http://localhost:"+port)
    }
})
