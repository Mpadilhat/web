import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./global-style/globalStyles";
import { Home, Login, Register } from "./screens";

function App() {
//Uéslei esteve aqui
  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <GlobalStyles />
      <Router>
        <Switch>
          {/* <Route path="/login" exact component={() => <Login />} /> */}
          {/* <Route path="/register" exact component={() => <Register />} /> */}
          {/* <Route path="/" exact component={() => <Home />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
