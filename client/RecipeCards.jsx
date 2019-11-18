import React from "react";
import Instructions from "./Instructions.jsx";
import Ingredients from "./Ingredients.jsx";

export default (props) => {
  return (
    <div>
      <h4>
        {props.recipe.name}
      </h4>
      <h4>
        {props.recipe.instructions}
      </h4>
      <h4>
        {props.recipe.ingredients}
      </h4>
    </div>
  )
}

