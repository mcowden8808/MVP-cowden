const React = require("react");
const { selectAll, insert, deleteOne } = require("./db/index.js")

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/recipes', (req, res) => {
  // console.log('got here2')
  selectAll((err, recipeData) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(recipeData);
    }
  })
})

app.post('/recipes', (req, res) => {
  insert(req.body, (err, success) => {
      if (err) {
          res.status(500).json({ success: false })
      } else {
          res.json({ success: true })
      }
  })
})

app.delete('/recipes', (req, res) => {
  deleteOne(req.body, (err, success) => {
    if (err) {
      res.status(500).json({ success: false })
    } else {
      res.json({ success: true })
    }
  })
})

app.listen(port);




