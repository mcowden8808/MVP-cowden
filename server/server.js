const React = require("react");
const { selectAll } = require("./db/index.js")

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const path = require("path");
const port = process.env.PORT || 8000;


app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
  selectAll(req.params.name, (err, recipeData) => {
    console.log(recipeData)
    if (err) {
      res.status(500).json(err);
    } else {
      res.send(recipeData);
    }
  })
})

app.listen(port);