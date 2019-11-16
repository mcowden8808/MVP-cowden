import React from "react";
import RecipeList from "./RecipeList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}

export default App;
