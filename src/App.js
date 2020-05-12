import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./Components/Resume";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
};

export default App;
