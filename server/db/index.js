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
  // console.log('got here')
  Recipe.find({}, function(err, recipe) {
    // console.log(recipe)
    if (err) {
      cb(err, null)
    } else {
      cb(null, recipe)
    }
  })
}

const insert = function (recipeAdded, callback) {
  Recipe.create(recipeAdded, function (err, success) {
      if (err) {
          callback(err, null)
      } else {
          callback(null, success)
      }
  });
}

const deleteOne = function(recipeDeleted, cb) {
  Recipe.deleteOne(recipeDeleted, function (err, success) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, success)
    }
  })
}

module.exports = {
  selectAll,
  insert,
  deleteOne
}














