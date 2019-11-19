import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App.jsx";
import Recipe from "./Recipe.jsx";

const RecipeRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe" component={Recipe} />
    </Switch>
  </Router>
);

export default RecipeRouter;