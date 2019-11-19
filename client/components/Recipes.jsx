import React from "react";

const Recipes = props => (
  <div>
    {props.recipes.map(recipe => {
      return (
        <div key={recipe.recipe.url}>
          <img src={recipe.recipe.image} alt={recipe.recipe.label}></img>
          <p>{recipe.recipe.label}</p>
          <button>Show Recipe</button>
        </div>
      );
    })}
  </div>
);

export default Recipes;
