import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./global-style/globalStyles";
import { Provider } from "react-redux";
import { store } from "./store";
import { Home, Login, Register, Perfil } from "./screens";

function App() {
  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/register" exact component={() => <Register />} />
            <Route path="/perfil" exact component={() => <Perfil />} />
            <Route path="/" exact component={() => <Home />} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
