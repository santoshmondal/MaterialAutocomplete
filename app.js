/**
 * Created by santosh on 3/15/17.
 */
const express = require('express');

var app = express();

app.use(express.static('public'))

app.get("/", function(req, res){
    res.json({});
});

app.listen(3005, function(){
   console.log("APP STARTED.");
});