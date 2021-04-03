import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyles from "./global-style/globalStyles";
import { Home, Login, Register, Perfil, NotFound } from "./screens";

const App = (props) => {
  const usuario = useSelector((state) => state.usuario.usuario.email);
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user)
      dispatch({ type: "USUARIO/SET_USUARIO", usuario: JSON.parse(user) });
  }, [dispatch]);

  const LogadoRoute = ({ component: Rota, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        usuario ? (
          <Rota {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  const DeslogadoRoute = ({ component: Rota, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        !usuario ? (
          <Rota {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <LogadoRoute path="/profile" exact component={() => <Perfil />} />
        <DeslogadoRoute path="/login" exact component={() => <Login />} />
        <DeslogadoRoute path="/register" exact component={() => <Register />} />
        <Route path="*" component={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
