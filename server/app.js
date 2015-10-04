/**
 * Created by m3rkz0r on 10/2/15.
 */
var express = require('express');
var app = express();

var jsonData = require('../models/data.json');

app.use(express.static(__dirname + '/public'));

//when app opens query index.html file
app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/views/index.html');
});


var server = app.listen(3000,function(){
   var port = server.address().port;
    console.log("Listening on ",port);
});


module.exports = app;