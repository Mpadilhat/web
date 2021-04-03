import { createTypes } from "reduxsauce";

export const empresaTypes = createTypes(
  `
  SET_EMPRESA
  SET_VEICULOS
  `,
  { prefix: "EMPRESA/" }
);

const setEmpresa = (empresa) => {
  return async (dispatch) => {
    dispatch({ type: empresaTypes.SET_EMPRESA, empresa });
  };
};

const setVeiculos = (veiculos) => {
  return async (dispatch) => {
    dispatch({ type: empresaTypes.SET_VEICULOS, veiculos });
  };
};

export const empresaActions = {
  setEmpresa,
  setVeiculos,
};
