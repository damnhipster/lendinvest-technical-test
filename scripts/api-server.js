#!/usr/bin/env node

var express = require('express');
var app = express();

app.get('/api/current-loans.json', function(req, res){
  res.json(require('../resources/current-loans.json'));
});

app.listen(8081);

console.log('Started API server: http://localhost:8081/api/current-loans.json');
