import React from "react";

const API_KEY = "65f0f403d7b805da6d9898ede31488e6";
const APP_ID = "0be42a5c";

class Recipe extends React.Component {
  state = {
      image: "",
      title: "",
      publisher: "",
      url: ""
    };


  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const response = await request.json();
    this.setState({ image: response.hits[0].recipe.image, title: response.hits[0].recipe.label, publisher: response.hits[0].recipe.source, url: response.hits[0].recipe.url })
    console.log(response.hits[0].recipe)
    // console.log(response)
    // console.log(this.state.activeRecipe)
    // console.log(this.state.activeRecipe.recipe.image)
  }

  render() {
    // console.log(this.props)
    // const recipeActive = this.state.activeRecipe;
    console.log(this.state.image)
    return (
      <div className="container">
        <div className="active-recipe">
          <img className="active-recipe__img" src={this.state.image} />
          <h3 className="active-recipe__title">{ this.state.title }</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>{this.state.publisher}</span>
          </h4>
          <p className="active-recipe__website">Website:
            <span> <a href={this.state.url}>{this.state.url}</a></span>
          </p>
          <button className="active-recipe__button">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default Recipe;

//