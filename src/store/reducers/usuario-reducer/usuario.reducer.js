import { usuarioTypes } from "../../actions";

const INITIAL_STATE = {
  usuario: true,
};

export const usuario = (state = INITIAL_STATE, action) => {
  if (action.type === usuarioTypes.SET_USUARIO) {
    console.log("IF1");
    return { ...state, usuario: action.usuario };
  } else {
    console.log("ELSE 1");
    return state;
  }
};
