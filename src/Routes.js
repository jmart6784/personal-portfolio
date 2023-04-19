import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import VideoDemo from "./components/VideoDemo";

const Routes = () => {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/video-demo/:video" component={VideoDemo} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
