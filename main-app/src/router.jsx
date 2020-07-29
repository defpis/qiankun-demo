import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/first-feature-app">First Feature App</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/first-feature-app">
        <div id="first-feature-app"></div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
