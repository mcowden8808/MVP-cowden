import React from "react";
import RecipeCards from "./RecipeCards.jsx"

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let recipes = [
      "Bison Burger",
      "Flatbread Pizza",
      "Fish and Chips",
      "Sweet Potatoe Fries",
      "Enchiladas Verde"
    ];

    let listItems = recipes.map(recipe => <li>{recipe}</li>);

    return (
      <div id="recipe-list">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default RecipeList;
