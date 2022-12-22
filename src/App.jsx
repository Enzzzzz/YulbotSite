import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  

import Home from "./routes/Home";
import Comandos from "./routes/Comandos";
  
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comandos" component={Comandos} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;