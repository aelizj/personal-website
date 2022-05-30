const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log('Running your app!'));

app.get('/', (req, res) => {
  res.send('GET request to annejones.dev/')
  let para = document.createElement('h1');
  para.textContent = "HELLO WORLD"
  document.body.appendChild('para');
} )