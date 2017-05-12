const express = require('express');
const reload = require('reload');

// Create App
const app = express();

app.use(express.static('public'));

app.listen('3000', function() {
  console.log('Running on localhost:3000');
});
