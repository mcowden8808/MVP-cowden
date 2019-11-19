import React from "react";
// import RecipeList from "./components/RecipeList.jsx";
import Form from "./components/Form.jsx";

const API_KEY = "65f0f403d7b805da6d9898ede31488e6";
const APP_ID = "0be42a5c";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeArr: []
    };
    this.getRecipe = this.getRecipe.bind(this);
  }

  async getRecipe(e) {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const data = await api_call.json();
    this.setState({ recipeArr: data.hits });
    console.log(this.state.recipeArr);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Hunger Helper</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipeArr.map(recipe => {
          return <p key={ recipe.recipe.url }>{recipe.recipe.label}</p>;
        })}
      </div>
    );
  }
}

export default App;
