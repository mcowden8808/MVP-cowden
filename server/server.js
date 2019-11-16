const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "../public/index.html"));
})

app.listen(port);