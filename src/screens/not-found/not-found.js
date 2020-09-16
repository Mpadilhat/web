import React from "react";
import * as s from "./styled-not-found";

const NotFound = () => {
  return (
    <s.Body>
      <s.DivContainer>
        <div>
          <h1> Erro 404</h1>
          <h1> :( </h1>
        </div>
        <label>Rota inexistente!</label>
        <a href="/">Home</a>
      </s.DivContainer>
    </s.Body>
  );
};

export default NotFound;
