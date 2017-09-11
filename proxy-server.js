var express  = require('express');
var app      = express();

//app.use(compress());

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();


app.all("*remote/**", function(req, res) {
  console.log('remote server....');
  res.status(200).send({});
});



app.all("**", function(req, res) {
  //res.status(200).send({});
  console.log('redirecting to angular cli');
  apiProxy.web(req, res, {target: 'http://localhost:4200'});
});

app.listen(4000);
