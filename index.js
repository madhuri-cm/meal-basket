const express = require ('express')
const app = express()
const port = 3030
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())
app.use(express.static('public/uploads'))

//database setUP
const configDB = require('./config/database')
configDB()

//routes setup 
const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening to the port',port)
})