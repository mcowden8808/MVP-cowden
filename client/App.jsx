import React from "react";
import RecipeList from "./RecipeList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          this.setState({
            data: data
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
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
