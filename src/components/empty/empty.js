import React from "react";

import * as s from "./styled-empty";

const Empty = ({ failed }) => {
  return (
    <s.Container>
      {failed ? (
        <h1>Não foi possível carregar as empresas :(</h1>
      ) : (
        <h1>Ainda não há nenhuma empresa cadastrada</h1>
      )}
    </s.Container>
  );
};

export default Empty;
