import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./Components/Resume";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
};

export default App;
