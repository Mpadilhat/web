import { createStore, combineReducers } from "redux";

import { usuario, empresa } from "./reducers";

const reducers = combineReducers({
  usuario,
  empresa,
});

export const store = createStore(reducers);

export * from "./actions";
