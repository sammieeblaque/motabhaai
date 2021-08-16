import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AnimeReducer from "./AnimeReducer";

export default createStore(
  AnimeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
