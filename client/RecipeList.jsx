import React from "react";
import axios from "axios";
import RecipeCard from "./RecipeCards.jsx";
import Recipe from "./Recipe.jsx";
import Instructions from "./Instructions.jsx";
import Ingredients from "./Ingredients.jsx";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  async componentDidMount() {
    let res = await axios.get("/recipes");
    this.setState({ recipes: res.data });
  }

  render() {
    let recipeList = this.state.recipes.map((recipe, index) => (
      <RecipeCard recipe={recipe} key={index} />
    ));

    return (
        <div>{recipeList}</div>
    );
  }
}

export default RecipeList;
