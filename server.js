const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

http.listen(8080,()=>{
    console.log('listening on 8080' + __dirname);
})
app.use(express.static( path.join(__dirname, 'build')));

app.get('/',(req,res)=>{
    res.sendfile(path.join(__dirname,'build/static/index.html'))
})