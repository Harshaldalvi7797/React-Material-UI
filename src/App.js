import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Home />
    </div>
  );
};

export default App;
