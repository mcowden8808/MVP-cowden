import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe.jsx"

const Recipes = props => (
  <div>
    {props.recipes.map(recipe => {
      let recipe_id = Math.floor(recipe.recipe.calories);
      return (
        <div key={recipe.recipe.url}>
          <img src={recipe.recipe.image} alt={recipe.recipe.label}></img>
          <p>{recipe.recipe.label}</p>
          <button>
            <Link
              to={{
                pathname: `/recipe/${recipe_id}`,
                state: { recipe: recipe.recipe.label }
              }}
            >
              Show Recipe
            </Link>
          </button>
        </div>
      );
    })}
  </div>
);

export default Recipes;
