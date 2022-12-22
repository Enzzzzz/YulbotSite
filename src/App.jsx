import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  

import Home from "./components/Home";
import Comandos from "./components/Comandos";
  
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" element={Home} />
          <Route path="/comandos" element={Comandos} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;