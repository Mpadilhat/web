import { usuarioTypes } from "../../actions";

const INITIAL_STATE = {
  usuario: {},
};

export const usuario = (state = INITIAL_STATE, action) => {
  if (action.type === usuarioTypes.SET_USUARIO) {
    localStorage.setItem("user", JSON.stringify(action.usuario));
    return { ...state, usuario: action.usuario };
  } else {
    return state;
  }
};
