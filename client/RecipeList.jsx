import React from "react";
import axios from "axios";
import RecipeCards from "./RecipeCards.jsx";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  async componentDidMount() {
    let res = await axios.get("/recipes");
    console.log(res)
    this.setState({ recipes: res.data });
  }

  render() {
    let recipeList = this.state.recipes.map((recipe, index) => {
      <RecipeList key={index} recipe={recipe} />
    })

    return (
      <div>
        {recipeList}
      </div>
    );
  }
}

export default RecipeList;
