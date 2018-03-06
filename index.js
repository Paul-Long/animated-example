const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, './')));
app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

const server = app.listen(4000, function () {
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://localhost:%s", port)
});
