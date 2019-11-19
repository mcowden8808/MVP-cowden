import React from "react";

const API_KEY = "f8d9863c0297994c752738c0616c5943";
const APP_ID = "67435642";

class Recipe extends React.Component {
  state = {
      activeRecipe: []
    };


  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const response = await request.json();
    this.setState({ activeRecipe: response.hits[0].recipe })
    console.log(this.state.activeRecipe)
    // console.log(response)
    // console.log(this.state.activeRecipe)
    // console.log(this.state.activeRecipe.recipe.image)
  }

  render() {
    // console.log(this.props)
    const recipeActive = this.state.activeRecipe;
    // console.log(this.state.image)
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipeActive.image} />
            <h3 className="active-recipe__title">{ recipeActive.label }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipeActive.source}</span>
            </h4>
            <p className="active-recipe__website">Website:
              <span> <a href={recipeActive.url}>{recipeActive.url}</a></span>
            </p>
            <button className="active-recipe__button">Back to Home</button>
        </div>
        }
      </div>
    );
  }
}

export default Recipe;