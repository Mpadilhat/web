import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";

import GlobalStyles from "./global-style/globalStyles";
import { Home, Login, Register, Perfil, NotFound } from "./screens";

const App = () => {
  const history = createBrowserHistory();
  const usuario = useSelector((state) => state.usuario.usuario);

  const pathLogado = ["/", "/profile"];
  const pathDeslogado = ["/", "/register", "/login"];

  console.log(history.location.pathname);
  console.log("user", usuario);

  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <GlobalStyles />

      <Router history={history}>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          {usuario ? (
            <>
              <Route path="/profile" exact component={() => <Perfil />} />

              {!pathLogado.includes(history.location.pathname) && (
                <>
                  <Route
                    path="/not-found"
                    exact
                    component={() => <NotFound />}
                  />
                  <Redirect to="not-found" />
                </>
              )}
            </>
          ) : (
            <>
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/register" exact component={() => <Register />} />

              {!pathDeslogado.includes(history.location.pathname) && (
                <>
                  <Route
                    path="/not-found"
                    exact
                    component={() => <NotFound />}
                  />
                  <Redirect to="not-found" />
                </>
              )}
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
