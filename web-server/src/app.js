const express  = require('express');

const app = express();

// listening on the root url.
app.get('', (req, res) => {
  res.send('<h1>Hello express!</h1>');
});

app.get('/help', (req, res) => {
  res.send('This is the help page!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

app.get('/weather', (req, res) => {
  res.send('This is the weather page!');
});

// this will start up the server.
app.listen(3000, () => {
  console.log('Server is running on port 3000')
});