const express = require('express');
const reload = require('reload');

// Create App
const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(port, function() {
  console.log('Running on ' + port);
});
