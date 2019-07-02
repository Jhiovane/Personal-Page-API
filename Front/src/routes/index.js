import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Edit from "../pages/Edit";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/edit" component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;