const path = require('path');
const express = require('express');

const port = (process.env.PORT || 8000);

const app = express();
const indexPath = path.join(__dirname, '/../dist/index.html');
const publicPath = express.static(path.join(__dirname, '../dist'));

app.use('/dist', publicPath);
app.get('/', function (_, res) {
  res.sendFile(indexPath)
  console.log('running off server.js');
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
