// install and save:
// "compression": "^1.7.0",
// "http-proxy": "^1.16.2",

const express     = require('express');
const compression = require('compression');
const httpProxy   = require('http-proxy');
const api         = require('./mock-server/api.js');

const app         = express();
const proxy       = httpProxy.createProxyServer();

const port        = 4000;

// Use Compression
app.use(compression());

api.create(app);

/**
 * Example
 * Catch requests that begin with...
 */
app.use('/api/**', function(req, res, next) {
  res.status(200).send({
    'name': 'apiResponse'
  });
});

/**
 * This will use the proxy server to route every remaining request to the file server
 * Currently set to :4200 for angular / ember cli
 */
app.use('/', function(req, res, next) {
  proxy.web(req, res, {target: 'http://localhost:4200'});
});

console.log('server started at :4000');
app.listen(port);
