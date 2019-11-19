import React from "react";
// import Instructions from "./Instructions.jsx";
// import Ingredients from "./Ingredients.jsx";

export default (props) => {
  return (
    <div>
      <h4 className="recipe-name">
        {props.recipe.name}
      </h4>
      <h4 className="recipe-instructions">
        {props.recipe.instructions}
      </h4>
      <h4 className="recipe-ingredients">
        {props.recipe.ingredients}
      </h4>
    </div>
  )
}

