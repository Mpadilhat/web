import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalStyles from "./global-style/globalStyles";
import { Home, Login } from "./screens";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/login" exact component={() => <Login />}/>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
