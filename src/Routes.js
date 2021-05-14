import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
