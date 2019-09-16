import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {
  state: 'check store'
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()
  )
);

export default store;
