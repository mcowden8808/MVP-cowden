const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mcowden:mc238788@cluster0-bttft.mongodb.net/test?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error")
})

db.once("open", function () {
  console.log("mongoose connected successfully")
})

const recipeSchema = mongoose.Schema({
  name: String,
  instructions: String,
  ingredients: String
})


const Recipe = mongoose.model("Recipe", recipeSchema)

const selectAll = function(cb) {
  Recipe.find({}, function(err, recipe) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, recipe)
    }
  })
}

module.exports = {
  selectAll
}