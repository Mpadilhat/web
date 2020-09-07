import { createTypes } from "reduxsauce";

export const usuarioTypes = createTypes(
  `
  SET_USUARIO
  `,
  { prefix: "USUARIO/" }
);

const setUsuario = (usuario) => {
  return async (dispatch) => {
    dispatch({ type: usuarioTypes.SET_USUARIO, usuario });
  };
};

export const usuarioActions = {
  setUsuario,
};
