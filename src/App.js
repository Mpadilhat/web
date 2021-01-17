import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyles from "./global-style/globalStyles";
import { Home, Login, Register, Perfil, NotFound } from "./screens";

const App = (props) => {
  const usuario = useSelector((state) => state.usuario.usuario);

  const pathLogado = ["/", "/profile"];
  const pathDeslogado = ["/", "/register", "/login"];

  console.log(props.history.location.pathname);
  console.log("user", usuario);

  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={() => <Home />} />
        {usuario ? (
          <>
            <Route path="/profile" exact component={() => <Perfil />} />

            {!pathLogado.includes(props.history.location.pathname) && (
              <>
                <Route path="/not-found" component={() => <NotFound />} />
                <Redirect to="/not-found" />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/register" exact component={() => <Register />} />

            {!pathDeslogado.includes(props.history.location.pathname) && (
              <>
                <Route path="/not-found" component={() => <NotFound />} />
                <Redirect to="/not-found" />
              </>
            )}
          </>
        )}
      </Switch>
    </div>
  );
};

export default withRouter(App);
