import { createStore, combineReducers } from "redux";

import { usuario } from "./reducers";

const reducers = combineReducers({
  usuario,
});

export const store = createStore(reducers);

export * from "./actions";
