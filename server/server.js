const express  = require('express')
const path  = require('path')
const http = require('http')

var app = express()

const port  = process.env.PORT || '3001'
app.set('port',port)

app.use(express.static(path.join(__dirname,'../build')))
app.get('*',function(req,res){
	res.sendFile(path.join(__dirname,'../build/index.html'))
})

const server  = http.createServer(app)
server.listen(port,()=> console.log('Running'));
