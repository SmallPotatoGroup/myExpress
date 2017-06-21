var express = require('express');
var session = require('express-session');
var debug = require('debug')('server');

var app = express();

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/', function(req, res, next) {
  var sess = req.session;
  debug('sess', sess);
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

app.use('/', express.static('../html/'));

app.listen(7000);
